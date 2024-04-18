import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "../colors";

const NewTask: React.FC = () => {
  const [task, setTask] = useState("");

  const handleTaskChange = (text: string) => {
    setTask(text);
  };

  const handleTaskSubmit = () => {
    if (task.trim() === "") {
      // Prevent adding empty tasks
      return;
    }
    // Pass the task to the parent component or perform other actions
    console.log("New task:", task);
    // Clear the input field after submitting the task
    setTask("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Create a new todo..."
        value={task}
        onChangeText={handleTaskChange}
        onSubmitEditing={handleTaskSubmit}
      />
      <TouchableOpacity style={styles.button} onPress={handleTaskSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    fontSize: 14,
    backgroundColor: colors.lightGray,
  },
  button: {
    backgroundColor: colors.gradient,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: colors.lightGray,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NewTask;
