import React from "react";
import { Svg, Path } from "react-native-svg";

const CheckIcon: React.FC = () => {
  return (
    <Svg width="11" height="9">
      <Path
        fill="none"
        stroke="#FFF"
        strokeWidth="2"
        d="M1 4.304L3.696 7l6-6"
      />
    </Svg>
  );
};

export default CheckIcon;
