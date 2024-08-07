import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Edit() {
  const params = useLocalSearchParams();
  const { id } = params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit User</Text>
      <Text style={styles.label}>User ID:</Text>
      <Text style={styles.value}>{id}</Text>
      {/* Additional form fields and logic for editing user details can go here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
});
