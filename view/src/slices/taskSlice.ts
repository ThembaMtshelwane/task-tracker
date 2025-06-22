import type { ITask } from "../definition";
import { apiSlice } from "./apiSlice";

const Task_URL = "/api/tasks";

export const TaskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation<
      { success: boolean; message: string },
      Partial<ITask>
    >({
      query: (data) => ({
        url: `${Task_URL}/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),

    getTasks: builder.query<
      { success: boolean; message: string; data: ITask[] },
      void
    >({
      query: () => ({
        url: `${Task_URL}/`,
        method: "GET",
      }),
      providesTags: ["Task"],
    }),

    updateTask: builder.mutation<
      { success: boolean; message: string; data: ITask },
      { id: string; data: Partial<ITask> }
    >({
      query: ({ data, id }) => ({
        url: `${Task_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation<{ success: boolean; message: string }, string>(
      {
        query: (id) => ({
          url: `${Task_URL}/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Task"],
      }
    ),
  }),
});

export const {
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useGetTasksQuery,
  useDeleteTaskMutation,
} = TaskApiSlice;
