import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

const win = Dimensions.get('window');

const Index = ({navigation}) =>{
    
  return (
  <View style={styles.container}>
    <TouchableOpacity 
      style={styles.button}
      onPress={() => {navigation.navigate('Java')}} >
        <Image source={require('./../../assets/02.version/java.png')} style={styles.btnImg}/>
    </TouchableOpacity>
    
    <TouchableOpacity 
      style={styles.button}
      onPress={() => {navigation.navigate('Bedrock')}}>
        <Image source={require('./../../assets/02.version/bedrock.png')} style={styles.btnImg}/>
    </TouchableOpacity>
    </View>
  )
      
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent : 'center',
      alignContent : 'center'
      
    },
    button: {
      alignItems:'center',
      marginBottom: '-10%',
    },
    btnImg: {
      width: '70%',
      resizeMode: 'contain'
    }
})

export default Index;