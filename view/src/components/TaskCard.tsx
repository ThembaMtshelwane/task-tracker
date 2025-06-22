import { convertHoursToDigitalClock } from "../utils/timeConversions";

type TaskCardProps = {
  name: string;
  duration: number;
};

const TaskCard = ({ name, duration }: TaskCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row border rounded-2xl border-blue-700 justify-between gap-4 cursor-default px-2 py-4">
      <div className=" w-[65%]">
        <div>Name: {name}</div>
        <div>Duration (hrs): {duration.toFixed(2)} </div>
        <div>Duration detailed: {convertHoursToDigitalClock(duration)} </div>
      </div>
      <div className="sm:w-[40%] flex gap-4 items-center justify-around ">
        <button className="w-[250px]">Edit</button>
        <button className="w-[250px]">Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
