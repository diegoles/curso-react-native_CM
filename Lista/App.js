import React, { Component } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
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
        <Input
          value={this.state.idPersona}
          onChangeText={(txt) => {
            this.setState({
              idPersona: txt,
            });
          }}
          placeholder="Id"
          keyboardType="numeric"
          leftIcon={<Icon name="key" size={24} color="black" />}
        />
        <Input
          value={this.state.nombrePersona}
          onChangeText={(txt) => {
            this.setState({
              nombrePersona: txt,
            });
          }}
          placeholder="NOMBRE"
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <Input
          value={this.state.telefonoPersona}
          onChangeText={(txt) => {
            this.setState({
              telefonoPersona: txt,
            });
          }}
          placeholder="TELEFONO"
          keyboardType="numeric"
          leftIcon={<Icon name="phone" size={24} color="black" />}
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
          keyExtractor={(key) => key.id + ""}
          renderItem={({ index, item }) => (
            <View>
              {/* <Text> {obj.index} - {obj.item.nombre} </Text>
                <Text>{obj.item.telefono}</Text> */}
              <ItemPersona
                indice={index}
                persona={item}
                fnEliminar={this.eliminar}
                fnSeleccionar={this.seleccionar}
              />
            </View>
          )}
        />
      </View>
    );
  }

  eliminar = ({ id }) => {
    let indice = this.buscar({ id });

    if (indice != -1) {
      this.personas.splice(indice, 1);
    }
    this.setState({
      listaPersonas: this.personas,
    });
  };

  seleccionar = ({ id, nombre, telefono }) => {
    if (this.buscar({ id }) != -1) {
      this.setState({
        idPersona: id,
        nombrePersona: nombre,
        telefonoPersona: telefono,
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

  buscar = ({ id }) => {
    let indice = -1;

    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].id === id) {
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
