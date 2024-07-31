import asyncHandler from "express-async-handler";

import { loginService, signupService } from "../services/auth.service.js";
import { verifyJwt } from "../services/jwt.service.js";
import { getAllUsers } from "../services/mysql.service.js";
import ResponseDTO from "../models/ResponseDTO.js";

export const signup = asyncHandler(async (req, res, next) => {
  let dto = new ResponseDTO();

  try {
    const { email, password } = req.body;
    await signupService(email, password);
    dto.success("Signup success!");
  } catch (e) {
    dto.fail(`Signup failed... ${e}`);
  }

  res.status(200).json(dto);
});

export const login = asyncHandler(async (req, res, next) => {
  let dto = new ResponseDTO();
  try {
    const { email, password } = req.body;
    const jwt = await loginService(email, password);
    dto.success(jwt);
  } catch (e) {
    dto.fail(`Login failed... ${e}`);
  }

  res.status(200).json(dto);
});

export const logout = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Login");
});

export const verify = asyncHandler(async (req, res, next) => {
  let dto = new ResponseDTO();
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = verifyJwt(token);
    dto.success(decoded.email);
  } catch (e) {
    dto.fail(`Verify failed... ${e}`);
  }

  res.status(200).json(dto);
});

export const test = asyncHandler(async (req, res, next) => {
  await getAllUsers().then();
  await findUser("user3");
  await findUser("user9");
  res.send("OK");
});
