import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {

    return(
        <View style={styles.view}>
            <Text style={styles.textStyle}>App Música</Text>
        </View>
    );


}

const styles = StyleSheet.create({

    view:{
        backgroundColor:'#069',
        padding:20
    },

    textStyle:{
        textAlign:'center',
        fontSize:30,
        color:'white'
    }

});

export default Header;