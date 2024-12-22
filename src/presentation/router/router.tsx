import { createBrowserRouter } from "react-router-dom";

import { DashboardLayout } from "../layouts/DashBoardLayout";
import { Root } from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      /// Dashboard Routes
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: <></>,
          },
          {
            path: "bears",
            element: <></>,
          },
        ],
      },
    ],
  },
]);
