import type { FC, SVGProps } from "react";

export type NavBarProps = {
  /**
   * The navigation options to be displayed in the NavBar.
   * Each option should have a label and optionally an active and inactive icon.
   */
  children: React.ReactNode;
};

export type NavBarOption = {
  /**
   * The label for the navigation option.
   */
  label: string;
  /**
   * The icon to display when the option is active.
   */
  activeIcon: FC<SVGProps<SVGSVGElement>>;
  /**
   * The icon to display when the option is inactive.
   */
  inactiveIcon: FC<SVGProps<SVGSVGElement>>;
};

export type ExtendedNavBarOption = NavBarOption & {
  data: NavBarOption[];
};
