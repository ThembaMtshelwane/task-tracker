import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import AddTasks from "./pages/AddTasks";
import ViewTasks from "./pages/ViewTasks";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<AddTasks />} />
        <Route path="/results" element={<ViewTasks />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
