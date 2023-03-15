import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React,{ useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Body from './components/Body';

export default function App() {

    const [count, setCount] = useState(0);

    const [nome, setNome] = useState('Dérick');

    const [lista, setLista] = useState(['Feijão', 'Arroz', 'Frango']);

    return(
      <View style={{marginTop:30}}>
        <Button onPress={()=> setLista(['Vinagre',...lista])} title='clique em mim'></Button>
        {
          lista.map((val) => {
            return(<Text>{val}</Text>)
          })
        }
      </View>
    )

}


