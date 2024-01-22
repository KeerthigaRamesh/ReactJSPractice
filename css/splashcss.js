import {StyleSheet} from 'react-native';
import {primaryColor} from '../colors/colorvariables';
import LinearGradient from 'react-native-linear-gradient';

const styleSheet = StyleSheet.create({
 
    container: {
        flex: 1,
        marginTop: 40,
         justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:primaryColor,
    },
    text: {
        margin:20,
        lineHeight:32,
        fontSize: 25,
        textAlign: 'center',
        color:'white',

      },
      image:{
        width:130,
         height:130,
       }
    });
export default styleSheet;

 