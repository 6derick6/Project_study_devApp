import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './componentes/Header';
import Body from './componentes/Body';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.mostrarHeader = true;
  }

  mostrarConteudo(){
    var mostrarBody = 1;
    if(this.mostrarHeader && mostrarBody == 1){
      return (
        <View>
          <Header />
          <Body />
        </View>
      );
    }else {
      return (
        
          <Body />
        
      );
    }

  }

  render(){

    return(
      <ScrollView style={{marginTop:30,flex:1}}>
      {
        this.mostrarConteudo()
      }
      </ScrollView>
    )
    
  }
}


