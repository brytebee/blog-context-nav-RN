// BlogCard.tsx
import React, { useContext } from "react";
import { Context } from "../context/BlogContext2";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface BlogCardProps {
  name: string;
  age: number;
  role: string;
  id: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ name, age, role, id }) => {
  const { dispatch } = useContext(Context);

  const handleDel = (id: number) => {
    return dispatch({ type: "del_blog", payload: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{age}</Text>
        <Text style={styles.text}>
          {role} - {id}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleDel(id)}>
        <Feather style={styles.icon} name="trash" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderTopWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default BlogCard;
