import { Provider } from "@/context/BlogContext2";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

const rightHead = (dir: string) => {
  switch (dir) {
    case "index":
      return (
        <Link href="/create" asChild>
          <TouchableOpacity>
            <Feather name="plus" style={styles.icon} />
          </TouchableOpacity>
        </Link>
      );
    case "show":
      return (
        <Link href="/edit" asChild>
          <TouchableOpacity>
            <EvilIcons name="pencil" style={styles.icon} />
          </TouchableOpacity>
        </Link>
      );
    default:
      null;
  }
};

export default function RootLayout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "User List",
            headerRight: () => rightHead("index"),
          }}
        />
        <Stack.Screen name="about" options={{ title: "All Users" }} />
        <Stack.Screen
          name="show"
          options={{
            title: "Update User",
            headerRight: () => rightHead("show"),
          }}
        />
      </Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  icon: { marginRight: 5, fontSize: 30 },
});
