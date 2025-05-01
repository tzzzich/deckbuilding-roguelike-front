import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/constants/router";
import { Root } from "@/pages/Root";
import { PrivateRoute } from "@/pages/PrivateRoute";
import { MainPage } from "@/pages/MainPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/queryClient";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.ROOT,
      element: <Root />,
      children: [
        {
          element: <PrivateRoute />,
          children: [
            {
              path: "/",
              element: <MainPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
