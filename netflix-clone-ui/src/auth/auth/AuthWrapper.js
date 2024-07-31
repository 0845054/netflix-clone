import { createContext, useContext, useEffect, useState } from "react";
import { loginApi, verifyApi } from "../../services/api.service";
import Cookies from "js-cookie";

const AuthContext = createContext({});
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState({ email: "", isAuthenticated: false });

  useEffect(() => {
    if (Cookies.get("token")) {
      verify();
    }
  }, []);

  const verify = async () => {
    await verifyApi().then((res) => {
      if (res.success) {
        setUser({ email: res.response, isAuthenticated: true });
      } else {
        logout();
      }
    });
  };

  const login = async (userName, password) => {
    return loginApi(userName, password)
      .then((res) => {
        if (res.success) {
          Cookies.set("token", res.response);
          return verify();
        } else {
          throw "Incorrect Email or Password.";
        }
      })
      .catch((e) => "Failed login");
  };

  const logout = () => {
    Cookies.remove("token");
    setUser({ email: "", isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, verify }}>
      <>{children}</>
    </AuthContext.Provider>
  );
};
