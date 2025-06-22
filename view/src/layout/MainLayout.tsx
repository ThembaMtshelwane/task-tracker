import { Link, NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav className="border-b-2 border-blue-500 py-4 px-6 flex justify-between items-center">
        <Link to="/">
          <p className="text-blue-500 text-3xl font-extrabold">LD</p>
        </Link>

        <ul className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "p-2 bg-blue-700 text-white rounded transition-colors"
                : "p-2 rounded hover:bg-blue-600 hover:text-white transition-colors"
            }
            end
          >
            Add Tasks
          </NavLink>
          <NavLink
            to="/results"
            className={({ isActive }) =>
              isActive
                ? "p-2 bg-blue-700 text-white rounded transition-colors"
                : "p-2  rounded hover:bg-blue-600  hover:text-white transition-colors"
            }
            end
          >
            View Tasks
          </NavLink>
        </ul>
      </nav>
      <div className="max-w-4xl mx-auto p-6  min-h-[70vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
