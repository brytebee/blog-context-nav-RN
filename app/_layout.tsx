import { Provider } from "@/context/BlogContext2";
import { Feather } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

const rightHead = () => {
  return (
    <Link href="/create" asChild>
      <TouchableOpacity>
        <Feather name="plus" style={{ marginRight: 5, fontSize: 30 }} />
      </TouchableOpacity>
    </Link>
  );
};

export default function RootLayout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "User List",
            headerRight: rightHead,
          }}
        />
        <Stack.Screen name="about" options={{ title: "All Users" }} />
      </Stack>
    </Provider>
  );
}
