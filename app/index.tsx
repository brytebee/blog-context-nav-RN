import BlogList from "@/components/BlogList";
import { Context } from "@/context/BlogContext2";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { dispatch } = useContext(Context);

  const handleAddBlog = () => {
    dispatch({ type: "add_blog" });
  };

  return (
    <>
      <View style={styles.top}>
        <Text style={styles.topText}>
          Learning Expo | Navigation | UseContext
        </Text>
        <Link style={styles.topLink} href="/about">
          Go to About
        </Link>
      </View>
      <Button title="Create User" onPress={handleAddBlog} />
      <BlogList />
    </>
  );
}

// Index.navigationOptions = () => {
//   return {
//     headerRight: <Feather name="plus" size={30} />,
//   };
// };

const styles = StyleSheet.create({
  top: {
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    fontSize: 18,
  },
  topLink: {
    fontSize: 16,
    cursor: "pointer",
    backgroundColor: "blue",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
});
