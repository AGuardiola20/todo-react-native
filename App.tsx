import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { colors } from "./colors";
import useFont from "./hooks/useFont";
import MoonIcon from "./components/MoonIcon";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  const font = useFont();
  const dimension = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/bg-mobile-light.jpg")}
        resizeMode="cover"
        style={{ width: dimension.width, position: "absolute" }}
      />
      <View style={styles.todoContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Todo</Text>
          <TouchableOpacity>
            <MoonIcon />
          </TouchableOpacity>
        </View>
        <NewTask />
      </View>
      <ScrollView style={styles.todoContainer}>
        <TaskList taskTitle="name" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.veryLightGrayrishBlue,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 28,
    color: colors.lightGray,
    fontWeight: "bold",
  },
  todoContainer: {
    marginHorizontal: 30,
    marginVertical: 50,
  },
});

export default App;
