const getFullNames = (name1,name2,name3) =>{
    return name1+" \n\n "+name2+"\n\n "+name3;
 };
  
 export default function App() {
   return (
     <View style={styles.container}>
      <Text style={styles.innerTextStyle}>{getFullNames("Keerthiga","Andorid Developer","PZ025")}</Text>
       <StatusBar style="auto" />
     </View>
   );
 }
 