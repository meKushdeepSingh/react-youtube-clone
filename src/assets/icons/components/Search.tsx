import type { FC, SVGProps } from "react";

const Search: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};

export default Search;
