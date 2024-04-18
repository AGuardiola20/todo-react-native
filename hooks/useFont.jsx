import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";

const useFont = () => {
  const [font, setFont] = useState("sans-serif");
  const [fontsLoaded] = useFonts({
    SpaceMonoBold: require("../assets/fonts/static/JosefinSans-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setFont("JosefinSans-Regular");
    }
  }, [fontsLoaded]);

  return font;
};

export default useFont;
