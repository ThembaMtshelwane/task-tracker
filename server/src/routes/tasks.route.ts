import express from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controller/tasks.controller";

const router = express.Router();

// Define routes for task management
// These routes handle the creation, retrieval, updating, and deletion of tasks.

router.post("/", createTask); // Create a new task
router.get("/", getTasks); // Retrieve all tasks
router.patch("/:id", updateTask); // Update a task by ID
router.delete("/:id", deleteTask); // Delete a task by ID

export default router;
