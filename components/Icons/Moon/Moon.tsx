import React from "react";

function MoonIcon(props) {
  const fill = props.fill || "currentColor";
  return (
    <svg
      width="24"
      height="24"
      fill={fill}
      className="transition-colors duration-200 text-gray-300 dark:text-lime-600"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"
      ></path>
    </svg>
  );
}

export default MoonIcon;
