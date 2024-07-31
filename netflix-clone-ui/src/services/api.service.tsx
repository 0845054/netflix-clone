import Cookies from "js-cookie";

export const loginApi = async (e: string, p: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: e, password: p }),
  };
  return await fetch("http://localhost:4000/auth/login", requestOptions)
    .then((res) => {
      return res.status === 200 ? res.json() : null;
    })
    .catch((e) => {
      return null;
    });
};

export const verifyApi = async () => {
  const token = getToken();
  const url = "http://localhost:4000/api/verify";
  const request = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  return await fetch(url, request)
    .then((res) => res.json())
    .catch((e) => {
      console.log(e);
    });
};

const getToken = () => {
  return Cookies.get("token");
};

export const testApi = async () => {
  const token = getToken();
  const url = "http://localhost:4000/api/test";
  const request = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return await fetch(url, request)
    .then((res) => res.json())
    .catch((e) => {
      console.log(e);
    });
};
