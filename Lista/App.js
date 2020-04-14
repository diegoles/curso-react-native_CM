import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {ItemPersona} from './componentes/ItemPersona';

export default class App extends Component {
  constructor() {
    super();
    this.personas = [
      { id: "10", nombre: "Edgar", telefono: "123456" },
      { id: "20", nombre: "Luis", telefono: "5874569" },
      { id: "30", nombre: "Juan", telefono: "654578" },
    ];
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>LISTA DE PERSONAS</Text>
        <FlatList
          data={this.personas}
          keyExtractor={(key) => {
            return key.id + "";
          }}
          renderItem={(obj) => {
            return (
              <View>
                <Text>
                  {obj.index} - {obj.item.nombre}
                </Text>
                <Text>{obj.item.telefono}</Text>
                <ItemPersona indice={obj.index} persona={obj.item}></ItemPersona>
              </View>
            );
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
    marginTop: 40,
  },
});
