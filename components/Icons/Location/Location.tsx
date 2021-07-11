import React from "react";

function LocationIcon(props) {
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
        <polyline fill="none" points=" 10,34 4,46 44,46 38,34 " />
        <path
          d="M38,16 c0,8.641-14,22.75-14,22.75S10,24.641,10,16c0-8.859,7.235-14,14-14S38,7.141,38,16z"
          fill="none"
          stroke={fill}
        />
        <circle cx="24" cy="16" fill="none" r="4" stroke={fill} />
      </g>
    </svg>
  );
}

export default LocationIcon;
