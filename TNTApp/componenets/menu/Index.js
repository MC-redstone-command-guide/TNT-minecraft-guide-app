import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

const win = Dimensions.get('window');

export default class Index extends Component{
    constructor(props){
        super(props);
      }
    
      render(){
        return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
             <Image source={require('./../../assets/02.version/java.png')} style={styles.btnImg}/>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
             <Image source={require('./../../assets/02.version/bedrock.png')} style={styles.btnImg}/>
          </TouchableOpacity>
          </View>
        )
      }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
       paddingLeft :'25%'
    },
    button: {

        marginBottom: '-10%',
    },
    btnImg: {
        width: '60%',
        resizeMode: 'contain'
    }
})
