import App from "./App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "./components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
