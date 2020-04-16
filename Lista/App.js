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
      actualizar: false,
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
          keyboardType="numeric"
        />
        <TextInput
          value={this.state.nombrePersona}
          onChangeText={(txt) => {
            this.setState({
              nombrePersona: txt,
            });
          }}
          placeholder="NOMBRE"
        />
        <TextInput
          value={this.state.telefonoPersona}
          onChangeText={(txt) => {
            this.setState({
              telefonoPersona: txt,
            });
          }}
          placeholder="TELEFONO"
          keyboardType="numeric"
        />

        {!this.state.actualizar && (
          <Button
            title="GUARDAR"
            onPress={() => {
              this.agregar({
                id: this.state.idPersona,
                nombre: this.state.nombrePersona,
                telefono: this.state.telefonoPersona,
              });
            }}
          />
        )}

        {this.state.actualizar && (
          <Button
            title="ACTUALIZAR"
            onPress={() => {
              this.actualizarPersona({
                id: this.state.idPersona,
                nombre: this.state.nombrePersona,
                telefono: this.state.telefonoPersona,
              });
            }}
          />
        )}

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
                  fnSeleccionar={this.seleccionar}
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

  seleccionar = (p) => {
    if (this.buscar(p) != -1) {
      this.setState({
        idPersona: p.id,
        nombrePersona: p.nombre,
        telefonoPersona: p.telefono,
      });
      this.cambiarEstadoActualizar();
    }
  };

  actualizarPersona = (p) => {
    let indice = this.buscar(p);
    if (indice != -1) {
      this.personas[indice].nombre = p.nombre;
      this.personas[indice].telefono = p.telefono;

      this.setState({
        listaPersonas: this.personas,
      });
      this.cambiarEstadoActualizar();
      this.limpiar();
    } else {
      Alert.alert("La persona no existe");
    }
  };

  cambiarEstadoActualizar = () => {
    this.setState({
      actualizar: !this.state.actualizar,
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
      });
      this.limpiar();
    } else {
      Alert.alert("La persona ya existe");
    }
  };

  limpiar = () => {
    this.setState({
      idPersona: "",
      nombrePersona: "",
      telefonoPersona: "",
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
});
