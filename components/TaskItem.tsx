import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CheckIcon from "./CheckIcon";

interface Props {
  taskTitle: string;
  isComplete: boolean;
}

const TaskItem: React.FC<Props> = ({ taskTitle, isComplete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox}>
        <CheckIcon />
      </TouchableOpacity>
      <Text>{taskTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  checkbox: {
    borderWidth: 1,
  },
});

export default TaskItem;
