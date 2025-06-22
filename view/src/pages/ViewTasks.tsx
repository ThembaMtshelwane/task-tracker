import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../slices/taskSlice";

const ViewTasks = () => {
  const { data, isFetching } = useGetTasksQuery();

  const totalDuration =
    data?.data.reduce((sum, task) => sum + task.duration, 0) || 0;

  return (
    <section className="flex flex-col gap-4">
      <div className="text-center text-blue-700 space-y-2">
        <h1 className="text-5xl font-semibold">All Tasks </h1>
        <div className="flex flex-col">
          <p>Total Time Worked:</p>
          <span className="text-3xl font-extrabold">
            {totalDuration.toFixed(2)}hrs
          </span>
        </div>
      </div>

      <div className=" flex flex-col w-full sm:w-[70%] mx-auto justify-center gap-4">
        {isFetching ? (
          <>Loading...</>
        ) : (
          <>
            {data?.data.map((task) => (
              <TaskCard
                name={task.name}
                duration={task.duration}
                key={task.name + task.duration}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default ViewTasks;
