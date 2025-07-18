export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type: ButtonType;
}

export type ButtonType =
  | "icon-round"
  | "icon-round-bg-visible"
  | "text"
  | "icon-text-horizontal"
  | "icon-text-vertical";
