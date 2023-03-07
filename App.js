import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component{

  Header = () => {

    return(
      <Text>Home - Sobre - Contato</Text>
    );

  }

  Body = () => {

    return(
      <View>
        <Text>Conteúdo do meu app</Text>
      </View>
    );

  }

  Footer = () => {

    return(
      <Text>Rodapé do meu app.</Text>
    );

  }

  render(){
    return (
      <View style={{marginTop:30}}>
        <this.Header></this.Header>
        <this.Body></this.Body>
        <this.Footer></this.Footer>
        <Botao></Botao>
      </View>
    );
  }
}

const Botao = () => {

  return(

    <Button title='Clique'></Button>

  );

}

