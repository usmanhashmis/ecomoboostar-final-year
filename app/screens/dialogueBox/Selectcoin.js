// import React from "react";
// import { View, StyleSheet, Button, Alert } from "react-native";

// const showAlert = (handleLoad) =>
//   Alert.alert(
//     "Alert Title",
//     "My Alert Msg",
//     [
//       {
//         text: "ok",
//         onPress: () => {handleLoad(true)},
//         style: "cancel",
//       },
//     ],
//     {
//       cancelable: true,
//       onDismiss: () =>
//         Alert.alert(
//           "This alert was dismissed by tapping outside of the alert dialog."
//         ),
//     }
//   );

// const Selectcoin = ({loadHandle}) => (
//   <View style={styles.container}>
//     <Button title="Show alert" onPress={()=>{showAlert(loadHandle)}} />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });

// export default Selectcoin;

import React, { useState,useEffect,useContext } from "react";
import { View, Picker, StyleSheet, Alert,Text } from "react-native";
import axios from "react-native-axios";
import {AuthContext} from '../../authContext';

const Selectcoin = ({loadHandle,setPicker}) => {
  const [selectedValue, setSelectedValue] = useState("Select Coin");

  const { setCryptoData,getCoin,getCryptoData} = useContext(AuthContext);


  // useEffect(()=>{
  //   // Alert.alert("jsFHJDHFJK")
  //   setInterval(()=>{ cal() },1000) 
  // },[coins])
 
//   const cal=()=>{
//     axios.post('https://api.livecoinwatch.com/coins/list',data,{
//         headers: { 
//         'content-Type': 'application/json',
//         'x-api-key': '96315795-d069-44c6-b618-8ecb6ac71611'
//     }})
//     .then((res)=>{
//       setCryptoData(res.data)
//       //setCoins(res.data);
//     })
// }
const handleChange=(coin)=>{
  //Alert.alert(itemValue)
  setPicker(coin)
  //setCoin(coin);
  loadHandle(true)

}
return (

    <View style={styles.container}>
      
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>{handleChange(itemValue)}}
      >
        <Picker.Item value={null} label="select currency"/>
        {getCryptoData?.map(e=><Picker.Item label={e.name} value={e.name}/>)}
      
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default Selectcoin;