import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import TaskItem from "./TaskItem";

interface Props {
  taskTitle: string;
}

const TASK_LIST = [
  {
    isComplete: false,
    taskName: "Code for 1 hour",
  },
  {
    isComplete: false,
    taskName: "Eat",
  },
  {
    isComplete: false,
    taskName: "Speak",
  },
  {
    isComplete: false,
    taskName: "Hear",
  },
];

const TaskList: React.FC<Props> = ({ taskTitle }) => {
  const [taskList, setTaskList] = useState([]);
  return (
    <View style={styles.container}>
      <TaskItem taskTitle="hola" isComplete={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    paddingHorizontal: 30,
  },
});

export default TaskList;
