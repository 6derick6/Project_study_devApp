import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React,{ useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Body from './components/Body';

export default function App() {

    useEffect(() =>{
      alert('meu hook de efeito ta legal');
    })

    return(
      <View style={{marginTop:30}}>
        <Text>Funcionando</Text>
      </View>
    )

}


