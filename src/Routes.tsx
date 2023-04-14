import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "@/pages/home/Home";
import { ThemeColorProvider } from "./context/color/ThemeColorContext";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: process.env.PUBLIC_URL,
      element: <App />,
      errorElement: <p>Not Found</p>,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return (
    <ThemeColorProvider>
      <RouterProvider router={router} />
    </ThemeColorProvider>
  );
};

export default Routes;
