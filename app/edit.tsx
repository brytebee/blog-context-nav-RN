import BlogForm from "@/components/BlogForm";
import { BlogPost, Context } from "@/context/BlogContext2";
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { StyleSheet } from "react-native";

export default function Edit() {
  const { state, dispatch } = useContext(Context);
  const params = useLocalSearchParams();
  const { id } = params;
  const user = state.find((usr: BlogPost) => usr.id === +id);
  const { name, role, age } = user;

  const handleUpdate = (
    id: number,
    name: string,
    age: number,
    role: string
  ) => {
    dispatch({ type: "update_blog", payload: { id, name, age, role } });
  };

  return (
    <BlogForm
      initValues={{ name, role, age }}
      onSubmit={(name: string, age: number, role: string) =>
        handleUpdate(+id, name, age, role)
      }
    />
  );
}

const styles = StyleSheet.create({});
