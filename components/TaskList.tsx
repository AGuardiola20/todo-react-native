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

const TaskList: React.FC<Props> = ({ taskTitle }) => {
  const [taskList, setTaskList] = useState(TASK_LIST);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {taskList.map((task, index) => {
          const itemStyle =
            index < taskList.length - 1 ? styles.itemContainer : null;
          return (
            <View key={index} style={itemStyle}>
              <TaskItem
                taskTitle={task.taskName}
                isComplete={task.isComplete}
                checked={() => {}}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrayrishBlue,
  },
});

export default TaskList;
