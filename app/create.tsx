import BlogForm from "@/components/BlogForm";
import { Context, randNum } from "@/context/BlogContext2";
import { useContext } from "react";
import { StyleSheet } from "react-native";

export default function Create() {
  const { dispatch } = useContext(Context);

  const handleAdd = (name: string, age: number, role: string) => {
    dispatch({
      type: "add_blog",
      payload: { id: randNum(1, 999), name, age, role },
    });
  };

  return (
    <BlogForm
      onSubmit={handleAdd}
      initValues={{ name: "", age: 0, role: "" }}
    />
  );
}

const styles = StyleSheet.create({});
