import { readFileSync, writeFileSync } from "fs";
import { signJwt } from "../services/jwt.service.js";
import { getUser } from "./mysql.service.js";

const path = "./database/auth.database.json";

// const getUsers = () => {
//   const raw_data = readFileSync(path);
//   const data = JSON.parse(raw_data);
//   return data;
// };

const updateUsers = (users, user) => {
  if (getUser(users, user) != null) {
    throw "Email already exists";
  }
  users.push(user);
  writeFileSync(path, JSON.stringify(users));
};

// const getUser = (users, user) => {
//   return users.find((u) => u.email == user.email);
// };

export const signupService = async (e, p) => {
  const req = { email: e, password: p };
  const users = getUser();

  try {
    updateUsers(users, req);
  } catch (e) {
    throw e;
  }
};

export const loginService = async (e, p) => {
  // const req = { email: e, password: p };
  // const users = getUsers();
  // const user = getUser(users, req);

  let user = await getUser(e);
  if (user == null || user.password != p) {
    throw "Invalid Email or Password.";
  }

  return signJwt(user.email, user.password);
};
