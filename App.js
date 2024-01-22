import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import {appName,APIURL,appHeaderName,IMSTitle} from "./variables/globalvariables";
import styles from './css/splashcss' ;
import {  Image } from 'react-native';


///accessability info
const  App = () =>{  
  
  return (
    <View style={styles.container}> 
     
        <Text style={styles.text}>{appHeaderName}</Text>
        <Image  style={styles.image} source={require('./assets/logo.jpg')} resizeMode="contain"/>
        <Text style={styles.text}>{IMSTitle}</Text>

     </View>
  );
};

 

export default  App;






 
