import React from 'react';

const TriangleIcon = ({ ...props }) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 0L15.7942 12H0.205771L8 0Z" fill="#52B3D2" />
    </svg>
  );
};

export default TriangleIcon;
