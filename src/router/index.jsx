import { createBrowserRouter } from "react-router";
import NotFound from "../pages/NotFound";
import Intro from "../pages/Intro";
import Layout from "../components/layout/Layout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
    errorElement: <NotFound />,
  },
  {
    path: "/app",
    element: <Layout />,
    errorElement: <NotFound />,
  },
  {
    path: "*", // Catch-all route para 404
    element: <NotFound />,
  },
]);