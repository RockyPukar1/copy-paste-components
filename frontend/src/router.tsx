import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Filter from "./pages/Filter";
import NavigatePage from "./components/Navigate/Page";
import Navigate from "./components/Navigate";
import NavigateSection from "./components/Navigate/Section";
import Breadcrumb from "./pages/Breadcrumb";
import LocationBasedBreadcrumb from "./components/Breadcrumb/LocationBased";
import Countdown from "./pages/Countdown";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/components",
    children: [
      {
        path: "navigate",
        element: <Navigate />,
        children: [
          {
            path: "page",
            element: <NavigatePage />,
          },
          {
            path: "section",
            element: <NavigateSection />,
          },
        ],
      },
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
      }
    ],
  },
]);
