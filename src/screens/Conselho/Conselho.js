import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet, Alert } from "react-native";
import axios from "axios";

function ConselhoScreen({ navigation }) {
  const [conselho, setconselho] = useState();

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((resp) => {
        setconselho(resp.data.slip.advice);
      })
      .catch(() => {
        alert("Houve um problema com a API ;(");
      });
  }, [conselho]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.texto}> {conselho} </Text>
      <Button title="Pedir outro Conselho" onPress={() => setconselho(null)} />
      <View style={{ marginTop: 30 }}>
        <Button title="Voltar ao Início" onPress={() => navigation.goBack()} />
      </View>
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
  texto: {
    marginBottom: 30,
    fontSize: 15,
    width: 300,
    textAlign: "center",
  },
  botao: {
    backgroundColor: "blue",
    color: "black",
  },
});

export default ConselhoScreen;
