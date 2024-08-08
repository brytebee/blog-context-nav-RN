import BlogForm from "@/components/BlogForm";
import { BlogPost, Context } from "@/context/BlogContext2";
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Edit() {
  const { state } = useContext(Context);
  const params = useLocalSearchParams();
  const { id } = params;
  const user = state.find((usr: BlogPost) => usr.id === +id);
  const { name, role, age } = user;

  return (
    <BlogForm
      initValues={{ name, role, age }}
      onSubmit={(name: string, role: string, age: number) =>
        console.log(name, role, age)
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 15,
  },
});
