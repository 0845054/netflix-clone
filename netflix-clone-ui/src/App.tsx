import React, { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { AuthData } from "./auth/auth/AuthWrapper";

/*
https://www.figma.com/design/1Mf6jFMoOrqB2vlEMGQagr/Netflix-Design-System-2024-(Website-ver.)-🎥-(Community)?t=DNcZDJjRT8AzoJQ8-0
*/

function App() {
  const location = useLocation();
  const { logout, verify }: any = AuthData();

  useEffect(() => {
    if (location.pathname.includes("/nf")) {
      verify();
    } else {
      logout();
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
