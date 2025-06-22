import express, { Request, Response } from "express";
import cors from "cors";
import { PORT } from "./constants/env.constants";
import taskRoutes from "./routes/tasks.route";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/tasks", taskRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
