import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "../colors";

interface Props {
  handleAdd: (task: { isComplete: boolean; taskName: string }) => void;
}

const NewTask: React.FC<Props> = ({ handleAdd }) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (text: string) => {
    setTask(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Create a new todo..."
        value={task}
        onChangeText={handleTaskChange}
        onSubmitEditing={() => handleAdd({ isComplete: false, taskName: task })}
      />
      <TouchableOpacity
        disabled={task === ""}
        style={[styles.button, task === "" && styles.buttonDisabled]}
        onPress={() => {
          handleAdd({ isComplete: false, taskName: task.trim() });
          setTask("");
        }}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  input: {
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: colors.lightGray,
  },
  button: {
    backgroundColor: colors.gradient,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  buttonDisabled: {
    backgroundColor: colors.veryDarkGrayrishBlue,
  },
  buttonText: {
    color: colors.lightGray,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NewTask;
