import type { FC, SVGProps } from "react";

const HomeFilled: FC<SVGProps<SVGSVGElement>> = ({
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
      <path
        clip-rule="evenodd"
        d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};

export default HomeFilled;
