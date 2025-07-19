import express, { Request, Response } from "express";
import cors from "cors";
import loginRouter from "./routes/Login"

const app = express();
const PORT: number = 3000;
app.use(cors());
app.use(express.json());

app.use("/api", loginRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
