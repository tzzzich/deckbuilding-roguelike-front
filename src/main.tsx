import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/queryClient";
import App from "./App";
import { Grommet, grommet } from "grommet";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Grommet theme={grommet} full>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/deckbuilding-roguelike-front">
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Grommet>
  </StrictMode>
);
