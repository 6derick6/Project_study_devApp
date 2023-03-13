import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  const idade = 19;
  var nome = "Dérick";
  let cidade = "Brochier";

  const titulo_app = "App de Música";

  return (
    <View style={{marginTop:Constants.statusBarHeight}}>

      <Text>O {nome} mora em {cidade} e tem {idade} anos</Text>

    </View>
  )

}


