import { type FC } from "react";
import { useAppContext } from "../../../context";
import { CollapsedNavBar, ExtendedNavBar } from "./components";

const NavBar: FC = () => {
  const { navOpen } = useAppContext();

  return (
    <nav className="px-1">
      {navOpen ? <ExtendedNavBar /> : <CollapsedNavBar />}
    </nav>
  );
};

export { NavBar };
