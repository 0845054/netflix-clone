import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

const expiry = "1h";

export function signJwt(e, p) {
  return sign({ email: e, password: p }, process.env.SECRET_KEY, {
    expiresIn: expiry,
  });
}

export function verifyJwt(token) {
  return verify(token, process.env.SECRET_KEY);
}
