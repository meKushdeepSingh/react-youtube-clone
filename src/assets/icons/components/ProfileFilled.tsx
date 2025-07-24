import type { FC, SVGProps } from "react";

const ProfileFilled: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M18.37 19.709A9.98 9.98 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.98 9.98 0 003.63 7.709A9.96 9.96 0 0012 22a9.96 9.96 0 006.37-2.291ZM6.15 18.167a6.499 6.499 0 0111.7 0A8.47 8.47 0 0112 20.5a8.47 8.47 0 01-5.85-2.333ZM15.5 9.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};

export default ProfileFilled;
