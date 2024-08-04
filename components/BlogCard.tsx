import { Text, View } from "react-native";

interface Props {
  props: {
    name: string;
    age: number;
    role: string;
  };
}

export default function BlogCard({ props: { name, age, role } }: Props) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{role}</Text>
    </View>
  );
}
