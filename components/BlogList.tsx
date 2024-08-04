import { FlatList } from "react-native";
import { Context } from "@/context/BlogContext2";
import { useContext } from "react";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const { state } = useContext(Context);
  return (
    <FlatList
      data={state}
      keyExtractor={(value) => `${value.name}-${value.age}-${value.role}`}
      renderItem={({ item: { name, age, role } }) => (
        <BlogCard props={{ name, age, role }} />
      )}
    />
  );
}
