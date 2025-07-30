import type { FC } from "react";
import { Add, Bell, Menu, Mic, ProfileDummy, Youtube } from "../../../assets";
import { Button } from "../Button";
import { SearchBar } from "../SearchBar";
import { useAppContext } from "../../../context";

const Header: FC = () => {
  // Using the AppContext to manage the state of the navigation bar
  const { setNavOpen, navOpen } = useAppContext();

  return (
    <div className="items-center flex w-full h-[56px] px-4">
      <div className="flex items-center space-x-4">
        {/* Menu Button */}
        <Button
          onClick={() => setNavOpen(!navOpen)} // Placeholder for menu click handler
          type="icon-round"
          icon={Menu}
        />

        {/* Youtube logo */}
        <Youtube />
      </div>

      <div className="flex items-center space-x-4 mx-auto">
        {/* Search Bar */}
        <SearchBar />

        {/* Mic Button */}
        <Button
          type="icon-round-bg-visible"
          icon={Mic}
        />
      </div>

      <div className="flex items-center space-x-4">
        {/* Create Button */}
        <Button
          type="icon-text-horizontal-bg-visible"
          className="h-9 text-text font-bold text-[14px]"
          icon={Add}
          label="Create"
        />

        {/* Notification icon with count badge */}
        <Button
          type="icon-round"
          icon={() => (
            <span className="relative">
              <span className="h-4 w-4 items-center justify-center absolute -top-1 -right-1 bg-red-500 rounded-full text-text text-xs">
                5
              </span>
              <Bell />
            </span>
          )}
        />

        {/* Profile Icon */}
        <Button
          type="no-style"
          icon={() => (
            <img
              src={ProfileDummy}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          )}
        />
      </div>
    </div>
  );
};

export { Header };
