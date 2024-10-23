import Icons from "./icons.svg";

type PropsType = {
  id: string;
  size: number;
  className: string;
};

export const Icon: React.FC<PropsType> = ({ id, size, className }) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};

import React from "react";

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2_41)">
      <path
        d="M23.7501 8.0125L21.9876 6.25L15.0001 13.2375L8.01256 6.25L6.25006 8.0125L13.2376 15L6.25006 21.9875L8.01256 23.75L15.0001 16.7625L21.9876 23.75L23.7501 21.9875L16.7626 15L23.7501 8.0125Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_41">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const AnotherIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Додайте ваш SVG код для іншої іконки */}
  </svg>
);
