import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ConfirmProvider } from "./providers/ConfirmProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfirmProvider>
      <RouterProvider router={router} />
    </ConfirmProvider>
  </StrictMode>
);
