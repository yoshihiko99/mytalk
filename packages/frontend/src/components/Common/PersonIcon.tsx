import React from "react";

interface Props {
  className?: string;
}

const PersonIcon: React.VFC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="64"
    height="64"
    className={props.className}
  >
    <path
      fill-rule="evenodd"
      d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
    />
  </svg>
);

export default PersonIcon;
