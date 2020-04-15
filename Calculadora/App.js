import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [valor1, setValor1] = useState("0");
  const [valor2, setValor2] = useState("0");
  const [total, setTotal] = useState("0");
  return (
    <View style={styles.container}>
      <Text>CALCULADORA !!!!</Text>
      <TextInput
        value={valor1}
        onChangeText={(txt1) => {
          setValor1(txt1);
        }}
        placeholder="Ingrese valor 1:"
        keyboardType="numeric"
      />
      <TextInput
        value={valor2}
        onChangeText={(txt2) => {
          setValor2(txt2);
        }}
        placeholder="Ingrese valor 2:"
        keyboardType="numeric"
      />
      <Button
        title="SUMAR"
        onPress={() => {
          setTotal(parseFloat(valor1) + parseFloat(valor2));
        }}
      />
      <Text>{total}</Text>
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
});
