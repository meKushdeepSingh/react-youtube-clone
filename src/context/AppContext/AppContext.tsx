// src/context/AppContext.tsx
import { useState, type ReactNode } from "react";
import { AppContext } from "./useAppContext";
import { navigationOptions } from "../../common";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState<string | null>(
    navigationOptions[0].label
  );
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
