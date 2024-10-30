import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Breadcrumb from "./pages/Breadcrumb";
import LocationBasedBreadcrumb from "./components/Breadcrumb/LocationBased";
import Countdown from "./pages/Countdown";
import InfiniteScrolling from "./pages/InfiniteScrolling";
import Docs from "./pages/Docs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/components",
    children: [
      {
        path: "breadcrumb",
        element: <Breadcrumb />,
        children: [
          {
            path: "locationbased",
            element: <LocationBasedBreadcrumb />,
          },
        ],
      },
      {
        path: "countdown",
        element: <Countdown />
      },
      {
        path: "infinite-scrolling",
        element: <InfiniteScrolling />
      },
      {
        path: "docs",
        element: <Docs />
      }
    ],
  },
]);
