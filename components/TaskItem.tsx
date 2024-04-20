import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors } from "../colors";

interface Props {
  taskTitle: string;
  isComplete: boolean;
  checked: (isComplete: boolean) => void;
}

const TaskItem: React.FC<Props> = ({ taskTitle, isComplete, checked }) => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        onPress={(isComplete: boolean) => {
          checked(isComplete);
        }}
        text={taskTitle}
        fillColor={colors.gradient}
        textStyle={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 18,
  },
});

export default TaskItem;
