import type { FC } from "react";
import { Button } from "../../Button";
import { navigationOptions } from "../NavBar.constants";
import { useAppContext } from "../../../../context";

const CollapsedNavBar: FC = () => {
  // Using the AppContext to manage the state of the navigation bar
  const { selectedNav, setSelectedNav } = useAppContext();

  return (
    <div className="container mx-auto flex flex-col justify-between items-center">
      {navigationOptions.map((option) => (
        <Button
          className="pt-4 pb-3.5 text-text text-[10px]"
          type="icon-text-vertical"
          icon={
            selectedNav === option.label
              ? option.activeIcon
              : option.inactiveIcon
          }
          label={option.label}
          onClick={() => setSelectedNav(option.label)}
        />
      ))}
    </div>
  );
};
export { CollapsedNavBar };
