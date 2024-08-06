import BlogList from "@/components/BlogList";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
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
      <Link style={styles.topLink} href="/create">
        Create User
      </Link>
      <BlogList />
    </>
  );
}

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
