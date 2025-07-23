import type { FC } from "react";
import type { ButtonProps, ButtonType } from "./Button.type";

const Button: FC<ButtonProps> = ({ children, onClick, className, type }) => {
  // Define base styles for each button type
  const baseClass: Record<ButtonType, string> = {
    "icon-round": "rounded-full p-2 hover:bg-hover",
    "icon-round-bg-visible":
      "rounded-full p-2 bg-button-background hover:bg-hover",
    text: "text-blue-500 hover:text-blue-600",
    "icon-text-horizontal": "flex items-center space-x-2",
    "icon-text-vertical": "flex flex-col items-center space-y-1",
    "no-style": "",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClass[type]} ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
