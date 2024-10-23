// import Icons from "./icons.svg";

// type PropsType = {
//   id: string;
//   size: number;
//   className: string;
// };

// export const Icon: React.FC<PropsType> = ({ id, size, className }) => {
//   return (
//     <svg width={size} height={size} className={className}>
//       <use href={Icons + "#icon-" + id}></use>
//     </svg>
//   );
// };

import React from "react";
import icons from "./icons.svg"; // Шлях до вашого спрайта

type IconProps = {
  id: string;
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ id, size = 24, className }) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={`${icons}#icon-${id}`} />
    </svg>
  );
};

export default Icon;
