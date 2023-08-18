import React from "react";
import App from "./App";

import { createRoot } from "react-dom/client";

const container = document.getElementById("app-root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
