import { useState, type FC } from "react";
import { Button } from "../Button";
import { navigationOptions } from "./NavBar.constants";

const NavBar: FC = () => {
  const [activeOption, setActiveOption] = useState(navigationOptions[0].label);

  return (
    <nav className="px-1">
      <div className="container mx-auto flex flex-col justify-between items-center">
        {navigationOptions.map((option) => (
          <Button
            className="pt-4 pb-3.5 text-text text-[10px]"
            type="icon-text-vertical"
            icon={
              activeOption === option.label
                ? option.activeIcon
                : option.inactiveIcon
            }
            label={option.label}
            onClick={() => setActiveOption(option.label)}
          />
        ))}
      </div>
    </nav>
  );
};

export { NavBar };
