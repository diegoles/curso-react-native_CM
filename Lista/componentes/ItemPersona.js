import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export class ItemPersona extends Component {
  render() {
    const { persona, indice, fnEliminar, fnSeleccionar } = this.props;
    const { nombre, telefono } = persona;
    return (
      <View style={styles.fila}>
        <Text>
          Indice - Nombre =>
          {indice} - {nombre}
        </Text>

        <Text> Telefono => {telefono}</Text>
        <Button
          title="ELIMINAR"
          onPress={() => {
            fnEliminar(persona);
            // Alert.alert("id:" + .persona.id);
          }}
        />

        <Button
          title="SELECCIONAR"
          onPress={() => {
            fnSeleccionar(persona);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fila: {
    backgroundColor: "gray",
    borderBottomWidth: 1,
  },
});
