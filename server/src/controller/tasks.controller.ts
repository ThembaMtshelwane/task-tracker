import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import supabase from "../db/supabase.config";
import { SUPABASE_TABLE_NAME } from "../constants/env.constants";

// Controller functions for task management
// These functions handle the creation, retrieval, updating, and deletion of tasks.

// Create a new task
export const createTask = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { error } = await supabase.from(SUPABASE_TABLE_NAME).insert(req.body);

    if (error) {
      res.status(500).json({
        message: "Error creating task",
        error: error.message,
      });
      return;
    }

    res.status(201).json({
      message: "Task created successfully",
    });
  }
);

// Retrieve all tasks
export const getTasks = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { data, error } = await supabase.from(SUPABASE_TABLE_NAME).select();

    if (error) {
      res.status(500).json({
        message: "Error retrieving tasks",
        error: error.message,
      });
      return;
    }
    res.status(200).json({
      message: "Tasks retrieved successfully",
      data,
    });
  }
);

// Update a single task by ID
export const updateTask = expressAsyncHandler(
  async (req: Request, res: Response) => {}
);

// Delete a task by ID
export const deleteTask = expressAsyncHandler(
  async (req: Request, res: Response) => {}
);
