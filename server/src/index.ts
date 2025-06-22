import express, { Request, Response } from "express";
import cors from "cors";
import { PORT } from "./constants/env.constants";
import taskRoutes from "./routes/tasks.route";
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://task-tracker-ochre-one.vercel.app/",
    ],
  })
);

app.use("/api/tasks", taskRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
