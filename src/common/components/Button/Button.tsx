import { createElement, type FC } from "react";
import type { ButtonProps, ButtonTypeMap } from "./Button.type";

const Button: FC<ButtonProps> = ({ onClick, className, type, label, icon }) => {
  // Define base styles for each button type
  const baseClass: ButtonTypeMap = {
    // Icon button styles
    "icon-round":
      "rounded-full p-2 hover:bg-hover focus:outline-none  active:scale-90 transition duration-150 focus:outline-none",
    "icon-round-bg-visible":
      "rounded-full p-2 bg-button-background hover:bg-hover",

    // Text button styles
    text: "text-blue-500 hover:text-blue-600",

    // Icon with text styles
    "icon-text-horizontal":
      "flex items-center space-x-2 py-2 px-2 hover:bg-hover rounded text-[14px]",
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
      {icon && (
        <span className="icon">
          {typeof icon === "function" ? createElement(icon) : icon}
        </span>
      )}
      {label && <span className="label">{label}</span>}
    </button>
  );
};

export { Button };
