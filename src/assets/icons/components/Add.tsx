import type { FC, SVGProps } from "react";

const Add: FC<SVGProps<SVGSVGElement>> = ({
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
      <path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z"></path>
    </svg>
  );
};

export default Add;
