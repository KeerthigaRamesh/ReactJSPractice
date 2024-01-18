import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {React} from 'react';

let i=1;
const element = ( ) =>{
   return <h1>{
     i==1 ? "Condition True":"Condition False"}</h1> ;
};
ReactDom.render(element,document.getElementById('root'));
 
export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.innerTextStyle}>{getFullNames("Keerthiga","Andorid Developer","PZ025")}</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerTextStyle:{
    padding:10,
  backgroundColor:'red',
  fontSize:20,
  },
});
