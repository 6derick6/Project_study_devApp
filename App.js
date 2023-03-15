import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Body from './components/Body';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {

      contador: 0,
      pagina:'home'

    }
  }

  alterarAba = (pag) => {
    this.setState({pagina:pag})
  }

  render(){
    if(this.state.pagina == 'home'){
      return(
        <View style={{marginTop:30}}>
          <View><Text>Home</Text></View>
          <Button onPress={()=>this.alterarAba('contato')} title='CONTATO'></Button>
        </View>
      );
    }else if(this.state.pagina == 'contato'){
      return(
        <View style={{marginTop:30}}>
          <View><Text>Contato</Text></View>
          <Button onPress={()=>this.alterarAba('home')} title='HOME'></Button>
        </View>
      );
    }    
  }
}


