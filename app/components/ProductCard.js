import React,{useEffect, useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import { cal } from '../utils/ApiList';
import {appColors} from '../utils/appColors';
import {Alert} from 'react-native';
import Label from './Label';
import axios from "react-native-axios";
import { useDispatch } from 'react-redux';
import { cryptoPrices } from '../redux/cryptoPricesAction';

export default function ProductCard({navigation, item}) {
  const {title,name, description, price, image, isNew,rating} = item;
  const[coins,setCoins] = useState();
  //console.log({item});

  const dispatch = useDispatch();
  const data={
    "currency": "USD",
    "sort": "rank",
    "order": "ascending",
    "offset": 0,
    "limit": 1,
    "meta": true
  }
  useEffect(()=>{
    
    // setInterval(()=>{ cal() },1000)
    //cal();
    
  },[coins])
 
  const cal=()=>{
    axios.post('https://api.livecoinwatch.com/coins/list',data,{
        headers: { 
        'content-Type': 'application/json',
        'x-api-key': 'dc2efdfb-4389-437d-b755-e9e2593897a3'
    }})
    .then((res)=>{
        // setCoins(data);
      setCoins(res.data);
      
      //dispatch(cryptoPrices(res.data))
      //dispatch({type:'PRICES',payload : res.data})
    }).catch(()=>{
        Alert.alert("error")
    })

}

  return (
    <Pressable onPress={() => navigation.navigate('ProductDetails',{item})} style={{}}>
      <View
        style={{
          height: scale(200),
           width: scale(160),
          //backgroundColor:appColors.lightGray
        }}>
        <Image 
        resizeMode='contain'
        style={{height:scale(200), width:scale(180)}} 
        source={{ uri:image}} />
        {isNew && (
          <View
            style={{
              backgroundColor:appColors.red,
              position: 'absolute',
              top: scale(10),
              right: scale(20),
              padding: scale(3),
              borderRadius: scale(3),
              paddingHorizontal: scale(10),
            }}>
             
            <Label text="New" style={{fontSize:scale(10), color:appColors.white}} />
          </View>
        )}
      </View>
      <View style={{paddingVertical: scale(3)}}>
        <Label text={title?.substring(0, 20)} style={{fontSize: scale(18), fontWeight: '500'}} />
      </View>

      <View style={{paddingVertical: scale(2)}}>
        <Label
          text={description?.substring(0, 24)}
          style={{fontSize: scale(13), color: appColors.darkGray}}
        />
      </View>

      <View style={{paddingVertical: scale(5)}}>
        <Label
          // text={coins?.map(e=> e.symbol + e.rate )}

          text={coins?.map(e=>e.symbol) + price/coins?.map(e=>e.rate)}
          style={{
            fontSize: scale(18),
            color: appColors.primary,
            fontWeight: '500',
          }}
        />
      </View>
    </Pressable>
  );
}
