import React from "react";
import { Svg, Path } from "react-native-svg";

const CrossIcon: React.FC = () => {
  return (
    <Svg width="18" height="18">
      <Path
        fill="hsl(235, 19%, 35%)"
        fillRule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </Svg>
  );
};

export default CrossIcon;
