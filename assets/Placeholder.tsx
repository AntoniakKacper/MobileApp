import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

interface PlaceholderProps {
  width: number;
  height: number;
}

export const Placeholder = ({ width, height }: PlaceholderProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M15 8h.01" />
      <Rect x={4} y={4} width={16} height={16} rx={3} />
      <Path d="m4 15 4-4a3 5 0 0 1 3 0l5 5" />
      <Path d="m14 14 1-1a3 5 0 0 1 3 0l2 2" />
    </Svg>
  );
};

export default Placeholder;
