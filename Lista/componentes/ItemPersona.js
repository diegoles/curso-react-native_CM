import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export class ItemPersona extends Component {
  render() {
    return (
      <View style={styles.fila}>
        <Text>
          Indice - Nombre =>
          {this.props.indice} - {this.props.persona.nombre}
        </Text>

        <Text> Telefono => {this.props.persona.telefono}</Text>
        <Button
          title="ELIMINAR"
          onPress={() => {
            this.props.fnEliminar(this.props.persona);
            // Alert.alert("id:" + this.props.persona.id);
          }}
        />

        <Button title="SELECCIONAR" onPress={()=>{
          this.props.fnSeleccionar(this.props.persona)
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fila: {
    backgroundColor: "gray",
    borderBottomWidth: 1
    
  },
});
