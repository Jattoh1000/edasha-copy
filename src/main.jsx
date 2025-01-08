import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//IMPORTED PAGES
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import Create from "./pages/Create.jsx";
import ForgotPage from "./pages/ForgotPage.jsx";
import TargetPage from "./pages/TargetPage.jsx";
import ApplicationPage from "./pages/ApplicationPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

//ROUTER
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create",
        element: (
          <ProtectedRoute>
            <Create />
          </ProtectedRoute>
        ),
      },
      {
        path: "/forgotpassword",
        element: <ForgotPage />,
      },
      {
        path: "/targetpage",
        element: (
          <ProtectedRoute>
            <TargetPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/applicationpage",
        element: (
          <ProtectedRoute>
            <ApplicationPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/accountpage",
        element: (
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
