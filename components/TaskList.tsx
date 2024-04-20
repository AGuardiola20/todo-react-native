import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import TaskItem from "./TaskItem";
import ToastManager, { Toast } from "toastify-react-native";

interface Props {
  taskTitle: string;
}

const TaskList: React.FC<Props> = ({ taskTitle }) => {
  const TASK_LIST = [
    {
      isComplete: false,
      taskName: "Code for 10 hour",
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
  const [taskList, setTaskList] = useState(TASK_LIST);

  const showToasts = () => {
    Toast.success("Task deleted");
  };
  function handleDeleteTask(taskName: string) {
    const newList = taskList.filter((task) => task.taskName !== taskName);
    showToasts();
    setTaskList(newList);
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {taskList.map((task, index) => {
          return (
            <TaskItem
              key={index}
              taskTitle={task.taskName}
              isComplete={task.isComplete}
              handleChecked={() => {}}
              handleDelete={() => handleDeleteTask(task.taskName)}
            />
          );
        })}
        <View style={styles.cardButtons}>
          <Text>{taskList.length} items left</Text>
          <TouchableOpacity>
            <Text>Clear Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
  },
  cardButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginVertical: 16,
  },
});

export default TaskList;
