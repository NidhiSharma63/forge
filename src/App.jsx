import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import PuckEditor from "./pages/PuckEditor";
import Templates from "./pages/Templates";
import getToken from "./utils/getToken";

function ProtectedRoute() {
  const isAuthed = getToken();

  if (!isAuthed) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    element: <ProtectedRoute />, // wrapper
    children: [
      {
        path: "/",
        element: <Templates />,
      },
      {
        path: "/editor",
        element: <PuckEditor />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
