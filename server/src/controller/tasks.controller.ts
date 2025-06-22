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
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, duration } = req.body;

    const { data: existingTask } = await supabase
      .from(SUPABASE_TABLE_NAME)
      .select("id")
      .eq("id", id)
      .single();

    if (!existingTask) {
      res.status(404).json({
        message: `Task with ID ${id} not found. Cannot update.`,
      });
      return;
    }

    const { data: updatedTaskData, error: updateError } = await supabase
      .from(SUPABASE_TABLE_NAME)
      .update({ name, duration })
      .eq("id", id)
      .select();

    if (updateError) {
      res.status(500).json({
        message: "Error updating task",
        error: updateError.message,
      });
      return;
    }
    res.status(200).json({
      message: "Task updated successfully",
      data: updatedTaskData ? updatedTaskData[0] : null, // Return the updated task data
    });
  }
);

// Delete a task by ID
export const deleteTask = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const { data: existingTask } = await supabase
      .from(SUPABASE_TABLE_NAME)
      .select("id")
      .eq("id", id)
      .single();

    if (!existingTask) {
      res.status(404).json({
        message: `Task with ID ${id} not found. Cannot update.`,
      });
      return;
    }

    const { error } = await supabase
      .from(SUPABASE_TABLE_NAME)
      .delete()
      .eq("id", id);

    if (error) {
      res.status(500).json({
        message: "Error deleting task",
        error: error.message,
      });
      return;
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  }
);
