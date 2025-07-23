import type { FC } from "react";
import type { ButtonProps, ButtonType } from "./Button.type";

const Button: FC<ButtonProps> = ({ children, onClick, className, type }) => {
  // Define base styles for each button type
  const baseClass: Record<ButtonType, string> = {
    // Icon button styles
    "icon-round": "rounded-full p-2 hover:bg-hover",
    "icon-round-bg-visible":
      "rounded-full p-2 bg-button-background hover:bg-hover",

    // Text button styles
    text: "text-blue-500 hover:text-blue-600",

    // Icon with text styles
    "icon-text-horizontal": "flex items-center space-x-2",
    "icon-text-horizontal-bg-visible":
      "flex items-center space-x-2 py-2 px-4 bg-button-background hover:bg-hover rounded-full",
    "icon-text-vertical": "flex flex-col items-center space-y-1",

    // No style button
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
