import { Provider } from "@/context/BlogContext2";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Mesh Louge" }} />
        <Stack.Screen name="about" options={{ title: "What we do" }} />
      </Stack>
    </Provider>
  );
}
