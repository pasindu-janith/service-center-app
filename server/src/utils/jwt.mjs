import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const tokenGen = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "8h" });
};

export const tokenGenLogin = (payload, rememberMe) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: rememberMe ? "7d" : "1d",
  });
};

export const decodeToken = (token) => {
  return jwt.decode(token);
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.error("Token verification failed: Token has expired.");
      return { error: "Token has expired" };
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.error("Token verification failed: Invalid token.");
      return { error: "Invalid token" };
    } else {
      console.error("Token verification failed:", error.message);
      return { error: "Token verification failed" };
    }
    return null;
  }
};
