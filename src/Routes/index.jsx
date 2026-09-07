// ==========================================
// Routing Configuration: App Router
// Centralized React Router setup with static cinematic layout
// ==========================================

import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Layout & Core Pages
import Layout from "../Layout";
import Home from "../Pages/Home";
import OurWork from "../Pages/OurWork";
import Join from "../Pages/Join";
import NotFound from "../Pages/NotFound";

/**
 * Main application client-side routing tree
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "work",
        element: <OurWork />,
      },
      {
        path: "join",
        element: <Join />,
      },
    ],
  },
  {
    // Fallback for unknown routes
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
