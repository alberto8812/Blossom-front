import { createBrowserRouter } from "react-router-dom";

import { DashboardLayout } from "../layouts/DashBoardLayout";
import { Root } from "./Root";
import { CharacterPages } from "../pages";

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
            path: "characters/:id", // Incluye el ID como parámetro de la ruta
            element: <CharacterPages />, // Renderiza el componente CharacterPages
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
