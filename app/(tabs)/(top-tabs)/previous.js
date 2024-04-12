import { StyleSheet, Text, View } from "react-native";

export default function PreviousScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previous</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});