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

import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const Selectcoin = ({loadHandle}) => {
  const [selectedValue, setSelectedValue] = useState("Select Coin");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>{ setSelectedValue(itemValue),loadHandle(true)}}
      >
        <Picker.Item label="Trx" value="Trx" />
        <Picker.Item label="SOL" value="SOL" />
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