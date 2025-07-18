import type { FC } from "react";
import { Menu } from "../../../assets";
import { Button } from "../Button";

const Header: FC = () => {
  return (
    <div className="items-center justify-between flex w-full h-[56px] px-4">
      <Button type="icon-round">
        <Menu />
      </Button>
    </div>
  );
};

export { Header };
