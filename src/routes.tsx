import { createHashRouter } from "react-router-dom";
import Academic from "./pages/Academic/Academic";
import RootLayout from "./RootPage/RootLayout";
import Root from "./RootPage/RootApp";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "academico",
        element: <Academic />,
      },
    ],
  },
]);

export default router;
