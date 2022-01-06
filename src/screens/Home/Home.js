import React from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "seashell",
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Ask the Sage !</Text>
      <Image
        style={styles.imagem}
        source={{ uri: "https://picsum.photos/id/1025/200/300" }}
      />
      <Button
        title="Pedir Conselho"
        onPress={() => navigation.navigate("Conselho")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 200,
    height: 300,
    marginBottom: 30,
  },
});

export default HomeScreen;
