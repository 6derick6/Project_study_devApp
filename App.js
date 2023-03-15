import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './components/Body';

export default function App() {

    return(
      <View style={{marginTop:30}}>
        <Body texto="texto 1" titulo="clique aqui - danki code"></Body>
      </View>
    );

}


