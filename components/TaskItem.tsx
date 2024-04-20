import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors } from "../colors";
import CrossIcon from "./CrossIcon";

interface Props {
  taskTitle: string;
  isComplete: boolean;
  handleChecked: (isComplete: boolean) => void;
  handleDelete: () => void;
}

const TaskItem: React.FC<Props> = ({
  taskTitle,
  isComplete,
  handleChecked,
  handleDelete,
}) => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        onPress={() => {
          handleChecked(!isComplete);
        }}
        text={taskTitle}
        fillColor={colors.gradient}
        textStyle={styles.text}
        isChecked={isComplete}
      />
      <TouchableOpacity onPress={() => handleDelete()}>
        <CrossIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrayrishBlue,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 14,
  },
});

export default TaskItem;
