import { Request, Response } from "express";

export const loginUser = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
