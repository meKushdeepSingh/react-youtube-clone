import type { FC, SVGProps } from "react";

const Menu: FC<SVGProps<SVGSVGElement>> = ({
  height = "24",
  width = "24",
  fill = "currentColor",
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill={fill}
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      {...rest}
    >
      <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" />
    </svg>
  );
};

export { Menu };
