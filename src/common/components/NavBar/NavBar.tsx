import { type FC } from "react";
import { useAppContext } from "../../../context";
import { CollapsedNavBar } from "./components";

const NavBar: FC = () => {
  const { navOpen } = useAppContext();

  return <nav className="px-1">{navOpen ? null : <CollapsedNavBar />}</nav>;
};

export { NavBar };
