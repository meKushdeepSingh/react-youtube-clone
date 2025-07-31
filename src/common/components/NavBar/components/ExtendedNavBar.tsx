import type { FC } from "react";
import { Button } from "../../Button";
import { extendedNavigationOptions } from "../NavBar.constants";
import { useAppContext } from "../../../../context";

const ExtendedNavBar: FC = () => {
  // Using the AppContext to manage the state of the navigation bar
  const { selectedNav, setSelectedNav } = useAppContext();

  return (
    <div className="container mx-auto flex flex-col justify-between items-center px-2">
      {extendedNavigationOptions.map((section) => (
        // bg-button-background
        <Button
          className="justify-start w-full"
          type="icon-text-horizontal"
          label={section.label}
          icon={section.activeIcon}
        />
      ))}
    </div>
  );
};
export { ExtendedNavBar };
