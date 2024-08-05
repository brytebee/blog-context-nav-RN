import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Context } from "@/context/BlogContext2";
import BlogCard from "./BlogCard";
import { Link } from "expo-router";

export default function BlogList() {
  const { state } = useContext(Context);

  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Link href="/show" asChild>
          <TouchableOpacity>
            <BlogCard {...item} />
          </TouchableOpacity>
        </Link>
      )}
    />
  );
}
