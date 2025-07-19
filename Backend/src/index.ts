import express, { Request, Response } from "express";

const app = express();
const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
