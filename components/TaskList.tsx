import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import TaskItem from "./TaskItem";
import { Toast } from "toastify-react-native";

interface Props {
  tasks: { isComplete: boolean; taskName: string }[];
  clearAll: () => void;
  handleDeleteTask: (taskName: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, clearAll, handleDeleteTask }) => {
  const [taskList, setTaskList] = useState(tasks);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

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
          <TouchableOpacity onPress={() => clearAll()}>
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
