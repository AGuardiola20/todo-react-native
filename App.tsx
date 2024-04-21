import React, { useEffect, useState } from "react";
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
import ToastManager, { Toast } from "toastify-react-native";

const App: React.FC = () => {
  const font = useFont();
  const dimension = Dimensions.get("screen");
  const [tasks, setTasks] = useState([]);

  const showToasts = (text: string) => {
    Toast.success(text);
  };

  const handleAddTask = (newTask: {
    isComplete: boolean;
    taskName: string;
  }) => {
    console.log(newTask);
    const taskExists = tasks.some((task) => task.taskName === newTask.taskName);
    if (taskExists) {
      showToasts("Task already exist");
      return;
    }
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  };

  const handleDeleteTask = (taskName: string) => {
    const newList = tasks.filter((task) => task.taskName !== taskName);
    showToasts(`Task has been deleted`);
    setTasks(newList);
  };

  const clearAll = () => {
    const newList = [];
    showToasts("All tasks cleared");
    setTasks(newList);
  };

  return (
    <View style={styles.container}>
      <ToastManager position="top" />
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
        <NewTask handleAdd={handleAddTask} />
      </View>
      <ScrollView style={styles.todoContainerList}>
        <TaskList
          tasks={tasks}
          clearAll={clearAll}
          handleDeleteTask={handleDeleteTask}
        />
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
    marginTop: 50,
  },
  todoContainerList: {
    marginHorizontal: 30,
  },
});

export default App;
