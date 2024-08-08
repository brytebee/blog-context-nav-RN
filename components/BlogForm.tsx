import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";

export default function BlogForm({ onSubmit, initValues }: any) {
  const [name, setName] = useState(initValues.name);
  const [age, setAge] = useState<number>(initValues.age);
  const [role, setRole] = useState(initValues.role);

  return (
    <>
      <Text style={styles.label}>Enter name</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter age</Text>
      <TextInput
        value={age.toString()}
        inputMode="numeric"
        onChangeText={(text) => setAge(+text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter role</Text>
      <TextInput
        value={role}
        onChangeText={(text) => setRole(text)}
        style={styles.input}
      />
      <Button title="Save User" onPress={() => onSubmit(name, age, role)} />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    marginLeft: 5,
    fontSize: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});
