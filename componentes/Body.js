import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styleExterno from '../styles';

const Body = () => {

    return(

        <View style={styles.view}>
            
            <Image style={styles.image} source={{uri: 'https://cdn.motor1.com/images/mgl/PzJJ8/s3/vw-golf-gti-25th-anniversary---leilao-uk.jpg'}} />
            <Text style={styleExterno.fontStyle}>Ola do arquivo Body</Text>
            
        </View>
    );


}

const styles = StyleSheet.create({

    view:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:30
    },

    text:{
        width:'50%',
        padding:20
    },

    image:{
        width:300,
        height:200
    }

});

export default Body;