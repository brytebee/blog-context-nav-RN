import { Context, randNum } from "@/context/BlogContext2";
import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";

export default function Create() {
  const { dispatch, state } = useContext(Context);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [role, setRole] = useState("");

  const handleAdd = () => {
    dispatch({
      type: "add_blog",
      payload: { id: randNum(1, 999), name, age, role },
    });
    console.log(state);
  };

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
      <Button title="Add User" onPress={handleAdd} />
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
