/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useEffect,useReducer,useState}from 'react';
import MainStack from './app/routing/MainStack';
import {Provider} from 'react-redux';

import {StatusBar,Alert,View,Text} from 'react-native';
import storePre from './app/redux/store';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from './app/utils/AlertHelper'; 
import {PersistGate} from 'redux-persist/integration/react';
import TabNavigationStack from './app/routing/TabNavigationStack';
import {navigationTypeTabs} from './app.json';
import Feather from 'react-native-vector-icons/Feather'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Selectcoin from './app/screens/dialogueBox/Selectcoin'
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthContext } from './app/authContext';
import axios from "react-native-axios";

MaterialIcons.loadFont()
Ionicons.loadFont()
FontAwesome.loadFont()
Feather.loadFont()
MaterialCommunityIcons.loadFont()


const App =  () => {


  const[load, setLoad] = useState(false); 
  const[picker, setPicker] = useState("anc");
  const {persistor, store} = storePre;  
  
  //import {AuthContext} from './app/authContext';
  const [dataCrypto,setDataCrypto]=useState(null) 
  
  const data={
    "currency": "USD",  
    "sort": "rank",
    "order": "ascending",
    "offset": 0,
    "limit": 12,  
    "meta": true  
  }
  const authContext = React.useMemo( () => ({    
      s:"s",
      
      setCryptoData:() => { 

        axios.post('https://api.livecoinwatch.com/coins/list',data,{
        headers: { 
        'content-Type': 'application/json',
        'x-api-key': '96315795-d069-44c6-b618-8ecb6ac71611'
        }}).
        then((res)=>{ 
            //return res.data
            setDataCrypto(res.data)
            //setCoins(res.data);
        }).
        catch(err=>Alert.alert("error in crypto api"))
       
      },    
      getCryptoData:dataCrypto
    }),
    [],
  );

  
  useEffect(()=>{ 
    axios.post('https://api.livecoinwatch.com/coins/list',data,{
        headers: { 
        'content-Type': 'application/json',
        'x-api-key': '96315795-d069-44c6-b618-8ecb6ac71611'
    }})
    .then((res)=>{
      setDataCrypto(res.data)  
      }).catch(err=>Alert.alert("err in app.js useeffect"))
  },[])

  useEffect(()=>{
    authContext.s=picker
    },[picker])


  return (
    <Provider store={store}> 
    <AuthContext.Provider value={authContext}> 
    {!load && <Selectcoin loadHandle={setLoad} setPicker={setPicker}/>}
    {load &&
      <PersistGate loading={null} persistor={persistor}>
        {navigationTypeTabs ? <TabNavigationStack/> : <MainStack />} 
        <DropdownAlert
          defaultContainer={{
            padding: 8,
            paddingTop: StatusBar.currentHeight,
            flexDirection: 'row',
          }}
          ref={(ref) => AlertHelper.setDropDown(ref)}
          onClose={() => AlertHelper.invokeOnClose()}
        />
      </PersistGate>}
    </AuthContext.Provider>
    </Provider>
  );
};

export default App;
