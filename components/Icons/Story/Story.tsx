import React from "react";

function StoryIcon(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;

  return (
    <svg
      height="48"
      width="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={secondaryfill}
        stroke={secondaryfill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokewidth}
      >
        <path
          d="M19.819,30.734l-.358-2.508C24.333,29.333,27,28,27,28a18.983,18.983,0,0,1-3-9V17.274a8.182,8.182,0,0,0-7.467-8.257A8,8,0,0,0,8,17v2a18.983,18.983,0,0,1-3,9s2.667,1.333,7.539.226l-.358,2.508a2,2,0,0,1-1.4,1.633L4.138,34.359A3,3,0,0,0,2,37.232V42H30V37.232a3,3,0,0,0-2.138-2.873l-6.638-1.992A2,2,0,0,1,19.819,30.734Z"
          fill="none"
          stroke={fill}
        />
        <path
          d="M36,42H46V35.1a3,3,0,0,0-1.975-2.819l-7.9-2.872a2,2,0,0,1-1.3-1.6l-.506-3.543A7.994,7.994,0,0,0,39,17V11.073a4.367,4.367,0,0,0-4.364-4.364L33.507,4.45A.843.843,0,0,0,32.5,4.044L27.112,5.967A5.6,5.6,0,0,0,25.374,7"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default StoryIcon;
