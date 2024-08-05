import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  props: {
    name: string;
    age: number;
    role: string;
  };
}

export default function BlogCard({ props: { name, age, role } }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{age}</Text>
        <Text style={styles.text}>{role}</Text>
      </View>
      <Feather style={styles.icon} name="trash" />
    </View>
  );
}

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
