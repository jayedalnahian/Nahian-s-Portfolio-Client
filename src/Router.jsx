import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import AddProject from "./Components/AddProject/AddProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: `/project/:id`,
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/addProject",
        element: <AddProject></AddProject>,
      },
    ],
  },
]);

export default router;
