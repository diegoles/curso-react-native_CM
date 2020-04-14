import React, { Component } from "react";
import { Text, View } from "react-native";

export class ItemPersona extends Component {
  render() {
    return (
      <View>
        <Text>
          Indice - Nombre
          {this.props.indice} - {this.props.persona.nombre}
        </Text>

        <Text> Telefono: {this.props.persona.telefono}</Text>
      </View>
    );
  }
}
