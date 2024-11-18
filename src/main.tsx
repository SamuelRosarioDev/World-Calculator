// src/index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import routes from "./routes/router";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={routes} />
  </StrictMode>
);
