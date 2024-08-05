// BlogList.tsx
import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Context } from "@/context/BlogContext2";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const { state } = useContext(Context);

  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <BlogCard {...item} />}
    />
  );
}
