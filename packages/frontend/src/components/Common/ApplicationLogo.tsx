import React from "react";

interface Props {
  className?: string;
}

const ApplicationLogo: React.VFC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="120"
    height="120"
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
    className={props.className}
  >
    <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM9 12a2 2 0 1 1 .001-4.001A2 2 0 0 1 9 12zm6 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 15 12z" />
  </svg>
);

export default ApplicationLogo;
