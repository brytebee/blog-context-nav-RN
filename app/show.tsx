import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context, BlogPost } from "@/context/BlogContext2";
import { rightHead } from "./_layout";

export default function Show() {
  const { state } = useContext(Context);
  const params = useLocalSearchParams();
  const blog = state.find((post: BlogPost) => post.id === +params.id);

  if (!blog) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Blog post not found</Text>
      </View>
    );
  }

  const { id, name, age, role } = blog;

  return (
    <View style={styles.container}>
      <View style={styles.topSubContainer}>
        <Text>{rightHead("show", id)}</Text>
        <Text style={styles.title}>User Details</Text>
      </View>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{name}</Text>
      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>{age}</Text>
      <Text style={styles.label}>Role:</Text>
      <Text style={styles.value}>{role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  topSubContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
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
  errorText: {
    fontSize: 18,
    color: "red",
  },
});
