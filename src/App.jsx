// ==========================================
// Root Component: App
// Top-level application component mounting RouterProvider
// ==========================================

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

/**
 * Root React application component for Ema Cinema
 */
export default function App() {
  return <RouterProvider router={router} />;
}
