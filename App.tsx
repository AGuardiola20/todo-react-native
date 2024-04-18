import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "./colors";
import useFont from "./hooks/useFont";
import MoonIcon from "./components/MoonIcon";
import NewTask from "./components/NewTask";

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
      <View style={styles.todoContainer}>
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
        <NewTask />
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
  todoContainer: {
    marginVertical: 40,
    marginHorizontal: 30,
  },
});

export default App;
