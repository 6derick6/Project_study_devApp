import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Body = (props) => {

    function teste(){
        return (<Text>Exemplo</Text>)
    }

    return(
      <View>
        {teste()}
        <Text>{props.texto}</Text>
        <Button title={props.titulo}></Button>
      </View>
    );
  
}

export default Body;


