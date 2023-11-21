import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Coder!</Text>
      <Text>Mi nombre es Irina Gorlino</Text>
      <Text>¡Bienvenidos a mi tienda online!</Text>
      <Image
        style={{ width: 200, height: 200, marginTop: 30 }}
        source={require("./assets/chica-selfie.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF69B4",
    alignItems: "center",
    justifyContent: "center",
  },
});
