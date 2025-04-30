import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/constants/router";
import { Root } from "@/pages/Root";
import { PrivateRoute } from "@/pages/PrivateRoute";
import { MainPage } from "@/pages/MainPage";

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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: (error: unknown) => {
          console.log(error);
        },
      },
      mutations: {
        onError: (error: unknown) => {
          console.log(error);
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
