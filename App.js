import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './componentes/Header';
import Body from './componentes/Body';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.mostrarTexto = true;
    this.mostrarBotaoComTexto = false;
  }

  render(){

    return (
      <ScrollView style={{marginTop:30,flex:1}}>
        {
          (this.mostrarTexto)
          ?
          <Text>Texto</Text>
          :
          <View></View>
        }

        {
        (this.mostrarBotaoComTexto)
        ?
        <Button title='Botão com Texto'></Button>
        :
        <Button title='Botão sem Texto'></Button>
        }
      </ScrollView>
    );
  }
}


