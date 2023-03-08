import React from 'react';
import { Text, View, Image } from 'react-native';

const Body = () => {

    return(
        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',padding:30}}>
            
            <Image style={{width:300,height:200}} source={{
                uri: 'https://cdn.motor1.com/images/mgl/PzJJ8/s3/vw-golf-gti-25th-anniversary---leilao-uk.jpg'
            }} />
            <Text style={{width:'50%',padding:20}}>Ola do arquivo Body</Text>
            
        </View>
    );


}

export default Body;