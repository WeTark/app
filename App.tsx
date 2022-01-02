import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import localStorage from 'react-native-sync-localstorage'
import { HomeScreen } from './screen/HomeScreen';

const Stack = createNativeStackNavigator();

// const storeData = async (value) => {
//   try {
//     const jsonValue = JSON.stringify(value)
//     await AsyncStorage.setItem('@storage_Key', jsonValue)
//   } catch (e) {
//     // saving error
//   }
// }


// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@storage_Key')
//     const screenJson: Array<IScreensConfig> = jsonValue != null ? JSON.parse(jsonValue) : [];
//     return screenJson
//   } catch(e) {
//     // error reading value
//   }
// }


function App() {

  // React.useEffect(()=>{
  //   if(!localStorage.getItem('screensConfig')){
  //     localStorage.setItem('screensConfig', ScreensConfig)
  //     console.log('ih')
  //   }
  // },[])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;