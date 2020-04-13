import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nombre: ""
    };
  }
  render() {
    return(
      <View style={styles.container}>
      <Text>Bienvenido ED !!!!</Text>
      <TextInput
        value={this.state.nombre}
        onChangeText={(txt) => {
          this.setState({ nombre: txt });
        }}
        placeholder="Ingrese nombre:"
      />
      <Button
        title="CLICK ME!"
        onPress={() => {
          Alert.alert("HOLA" + this.state.nombre);
        }}
      />
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
