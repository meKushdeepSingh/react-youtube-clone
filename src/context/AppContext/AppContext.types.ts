export interface AppState {
  navOpen: boolean;
  selectedNav: string | null; // e.g., 'home', 'settings', etc.
  // Add more UI state as needed
  showModal: boolean;
  // Add methods to mutate the state
  setNavOpen: (open: boolean) => void;
  setSelectedNav: (nav: string) => void;
  setShowModal: (show: boolean) => void;
}
