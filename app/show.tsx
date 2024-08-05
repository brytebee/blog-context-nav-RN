import { BlogPost, Context } from "@/context/BlogContext2";
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Text } from "react-native";

export default function Show() {
  const { state } = useContext(Context);
  const params = useLocalSearchParams();
  const { id } = params;
  const blog = state.find((post: BlogPost) => post.id === +id);
  const { name, age, role } = blog;

  return (
    <>
      <Text>User Details</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Role: {role}</Text>
    </>
  );
}
