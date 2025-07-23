import type { FC } from "react";
import { Add, Bell, Menu, Mic, Youtube } from "../../../assets";
import { Button } from "../Button";
import { SearchBar } from "../SearchBar";
import ProfileDummy from "../../../assets/images/img-profile-dummy.jpeg";

const Header: FC = () => {
  return (
    <div className="items-center flex w-full h-[56px] px-4">
      <div className="flex items-center space-x-4">
        {/* Menu Button */}
        <Button type="icon-round">
          <Menu />
        </Button>

        {/* Youtube logo */}
        <Youtube />
      </div>

      <div className="flex items-center space-x-4 mx-auto">
        {/* Search Bar */}
        <SearchBar />

        {/* Mic Button */}
        <Button type="icon-round-bg-visible">
          <Mic />
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        {/* Create Button */}
        <Button
          type="icon-text-horizontal-bg-visible"
          className="h-9"
        >
          <Add />
          <span className="text-text font-bold text-[14px]">Create</span>
        </Button>

        {/* Notification icon with count badge */}
        <Button type="icon-round">
          <span className="relative">
            <span className="h-4 w-4 items-center justify-center absolute -top-1 -right-1 bg-red-500 rounded-full text-text text-xs">
              5
            </span>
            <Bell />
          </span>
        </Button>

        {/* Profile Icon */}
        <Button type="no-style">
          <img
            src={ProfileDummy}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </Button>
      </div>
    </div>
  );
};

export { Header };
