import { createContext, useContext } from "react";
import type { AppState } from "./AppContext.types";

export const AppContext = createContext<AppState | undefined>(undefined);

// Custom hook for easier use
export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
};
