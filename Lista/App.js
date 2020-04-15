import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { ItemPersona } from "./componentes/ItemPersona";

export default class App extends Component {
  constructor() {
    super();
    this.personas = [
      { id: "10", nombre: "Edgar", telefono: "123456" },
      { id: "20", nombre: "Luis", telefono: "5874569" },
      { id: "30", nombre: "Juan", telefono: "654578" },
    ];
    this.state = {
      listaPersonas: this.personas,
      idPersona: "",
      nombrePersona: "",
      telefonoPersona: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>LISTA DE PERSONAS</Text>
        <TextInput
          value={this.state.idPersona}
          onChangeText={(txt) => {
            this.setState({
              idPersona: txt,
            });
          }}
          placeholder="Id"
        />
        <TextInput
          value={this.state.nombrePersona}
          onChangeText={(txt) => {
            this.setState({
              nombrePersona: txt,
            });
          }}
          placeholder="nombrePersona"
        />
        <TextInput
          value={this.state.telefonoPersona}
          onChangeText={(txt) => {
            this.setState({
              telefonoPersona: txt,
            });
          }}
          placeholder="telefonoPersona"
        />
        <Button
          title="GUARDAR"
          onPress={() => {
            this.agregar({
              id: this.state.idPersona,
              nombre: this.state.nombrePersona,
              telefono: this.state.telefonoPersona
            });
          }}
        ></Button>
        <FlatList
          data={this.state.listaPersonas}
          keyExtractor={(key) => {
            return key.id + "";
          }}
          renderItem={(obj) => {
            return (
              <View>
                {/* <Text> {obj.index} - {obj.item.nombre} </Text>
                <Text>{obj.item.telefono}</Text> */}
                <ItemPersona
                  indice={obj.index}
                  persona={obj.item}
                  fnEliminar={this.eliminar}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }

  eliminar = (p) => {
    let indice = this.buscar(p);

    if (indice != -1) {
      this.personas.splice(indice, 1);
    }
    this.setState({
      listaPersonas: this.personas,
    });
  };

  buscar = (p) => {
    let indice = -1;

    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].id === p.id) {
        indice = i;
        break;
      }
    }
    return indice;
  };

  agregar = (p) => {
    if (this.buscar(p) == -1) {
      this.personas.push(p);
      this.setState({
        listaPersonas: this.personas,
        idPersona:"",
        nombrePersona:"",
        telefonoPersona:""
      });
    } else {
      Alert.alert("La persona ya existe");
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 40,
    marginLeft:10,
    marginRight:10
  },
});
