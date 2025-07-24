import type { FC, SVGProps } from "react";

type IconType = FC<SVGProps<SVGSVGElement>>;

type IconOnlyTypes = "icon-round" | "icon-round-bg-visible";
type LabelOnlyTypes = "text";
type IconLabelTypes =
  | "icon-text-horizontal"
  | "icon-text-horizontal-bg-visible"
  | "icon-text-vertical";
type OtherTypes = "no-style";

interface BaseButtonProps {
  className?: string;
  onClick?: () => void;
}

export type ButtonProps =
  | (BaseButtonProps & { type: IconOnlyTypes; icon: IconType; label?: never })
  | (BaseButtonProps & { type: LabelOnlyTypes; label: string; icon?: never })
  | (BaseButtonProps & { type: IconLabelTypes; icon: IconType; label: string })
  | (BaseButtonProps & { type: OtherTypes; icon?: IconType; label?: string });

export type ButtonType =
  | IconOnlyTypes
  | LabelOnlyTypes
  | IconLabelTypes
  | OtherTypes;

export type ButtonTypeMap = Record<ButtonType, string>;
