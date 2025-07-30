import type { FC } from "react";
import { Button } from "../../Button";
import { extendedNavigationOptions } from "../NavBar.constants";
import { useAppContext } from "../../../../context";

const ExtendedNavBar: FC = () => {
  // Using the AppContext to manage the state of the navigation bar
  const { selectedNav, setSelectedNav } = useAppContext();

  return (
    <div className="container mx-auto flex flex-col justify-between items-center">
      {extendedNavigationOptions.map((section) => (
        <div>{section.label}</div>
      ))}
    </div>
  );
};
export { ExtendedNavBar };
