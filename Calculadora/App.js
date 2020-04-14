import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      valor1: "",
      valor2: "",
      total: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>CALCULADORA  !!!!</Text>
        <TextInput
          value={this.state.valor1}
          onChangeText={(txt1) => {
            this.setState({ valor1: txt1 });
          }}
          placeholder="Ingrese valor 1:"
          keyboardType = "numeric"
        />
        <TextInput
          value={this.state.valor2}
          onChangeText={(txt2) => {
            this.setState({ valor2: txt2 });
          }}
          placeholder="Ingrese valor 2:"
          keyboardType = "numeric"
        />
        <Button
          title="SUMAR"
          onPress={() => {
            let res = parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
            this.setState({ total: res });
          }}
        />
        <Text>{this.state.total}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
