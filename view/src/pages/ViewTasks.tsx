import TaskCard from "../components/TaskCard";

const ViewTasks = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="text-center text-blue-700 space-y-2">
        <h1 className="text-5xl font-semibold">All Tasks </h1>
        <div className="flex flex-col">
          <p>Total Time Worked:</p>
          <span className="text-3xl font-extrabold">{18.23}hrs</span>
        </div>
      </div>

      <div className=" flex flex-col w-full sm:w-[70%] mx-auto justify-center gap-4">
        <TaskCard name={"Task 1"} duration={0} />
        <TaskCard name={"Task 1"} duration={1.75} />
        <TaskCard name={"Task 1"} duration={0.25} />
      </div>
    </section>
  );
};

export default ViewTasks;
