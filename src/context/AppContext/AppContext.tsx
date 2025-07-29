// src/context/AppContext.tsx
import { useState, type ReactNode } from "react";
import { AppContext } from "./useAppContext";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        navOpen,
        selectedNav,
        showModal,
        setNavOpen,
        setSelectedNav,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
