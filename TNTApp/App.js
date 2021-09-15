/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Java from './componenets/menu/Java'; 
import Index from './componenets/menu/Index';
import Bedrock from './componenets/menu/Bedrock'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App: () => Node = () => {
  
  
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1200);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} options={{headerShown : false}}/>
        <Stack.Screen name="Java" component={Java} options={{headerShown : false}}/>
        <Stack.Screen name="Bedrock" component={Bedrock} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
        
  );
};

const styles = StyleSheet.create({
  baseText: {
    flex:1,justifyContent: "center",alignItems: "center"
  }
  
});

export default App;
