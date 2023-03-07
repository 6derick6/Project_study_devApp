import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component{

  render(){
    return (
      <View>
        <Text>Minha imagem:</Text>
        <Image style={{width:50,height:50}}
        source={{uri: 'https://smartcookinggastronomy.files.wordpress.com/2007/09/frango1.jpg',}}
        />
      </View>
    );
  }
}

