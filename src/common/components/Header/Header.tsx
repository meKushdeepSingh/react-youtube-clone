import type { FC } from "react";
import { Menu } from "../../../assets";

const Header: FC = () => {
  return (
    <div className="header items-center justify-between p-4 bg-gray-800 text-white flex w-full">
      <Menu />
    </div>
  );
};

export { Header };
