const AddTasks = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="text-center text-blue-700 space-y-2">
        <h1 className="text-5xl font-semibold">Time Tracker </h1>
        <p className="text-lg"> Track your time, boost your productivity</p>
      </div>

      <div className="h-[50vh] flex flex-col w-[70%] mx-auto justify-center">
        <form className="flex flex-col border p-4 gap-4">
          <h2 className="text-2xl font-medium">Task</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Enter the task's name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Wash the dishes"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="duration">Duration (hrs)</label>
            <input type="number" min={0} placeholder="e.g. 2" />
          </div>

          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddTasks;
