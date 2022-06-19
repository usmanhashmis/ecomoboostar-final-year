
import React, { useState,useEffect } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import { cryptoPrices } from "../../redux/cryptoPricesAction";


const Selectcoin = ({loadHandle}) => {
  const [selectedValue, setSelectedValue] = useState();
  const [selects, setSelects] = useState();
  const { prices } = useSelector((state)=> state.cryptoPrices )
  useEffect(()=>{
    cryptoPrices();
    setSelects(prices)
    console.log(prices)
   },[])
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>{ setSelectedValue(itemValue),loadHandle()}}
      >
        {prices?.map((item)=>(
            <Picker.Item label={item.name} value={item.name}  />))}
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