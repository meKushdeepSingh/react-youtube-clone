import type { FC } from "react";
import { Menu, Mic, Youtube } from "../../../assets";
import { Button } from "../Button";
import { SearchBar } from "../SearchBar";

const Header: FC = () => {
  return (
    <div className="items-center flex w-full h-[56px] px-4">
      <div className="flex items-center space-x-4">
        <Button type="icon-round">
          <Menu />
        </Button>

        <Youtube />
      </div>

      <div className="flex items-center space-x-4 mx-auto">
        <SearchBar />
        <Button type="icon-round-bg-visible">
          <Mic />
        </Button>
      </div>

      <div className="flex items-center space-x-4"></div>
    </div>
  );
};

export { Header };
