import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "./colors";
import useFont from "./hooks/useFont";
import MoonIcon from "./components/MoonIcon";

interface Props {
  // Define tus props aquí
}

const App: React.FC<Props> = ({}) => {
  const font = useFont();
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/bg-mobile-light.jpg")}
        resizeMode="stretch"
        style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
      />
      <View style={{ marginHorizontal: 30, marginVertical: 40 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Todo</Text>
          <MoonIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.veryLightGrayrishBlue,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 28,
    color: colors.lightGray,
    fontWeight: "bold",
  },
});

export default App;
