import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeIndex } from './screen/home/Index';
import { LoadingScreen } from './screen/Loading';
import { getStoreData } from './action/Store';
import Api from './api/AuthApi';
import { LoginScreen } from './screen/login/Login';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState } from './App';
import { USER_REQUEST_SUCCESS } from './action/UseActionTypes';
import { EventDetail } from './screen/eventDetail/Index';
import { LoginPhone } from './screen/login/LoginPhone';

const Stack = createNativeStackNavigator();

function IndexApp() {

  const [isLoading, setIsLoading] = React.useState(true);
  const userData = useSelector((state:RootState) => state.userData)
  const dispatch = useDispatch();
  
  React.useEffect(()=>{
    getStoreData('token').then(token=>{
      Api.getUser(token).then(response => {
        console.log(response);
        dispatch({type: USER_REQUEST_SUCCESS, payload: response})
        setIsLoading(false)
      }).catch(e=>setIsLoading(false))
    })
  }, [])

  if(isLoading){
    return <LoadingScreen />
  }

  return (
    <NavigationContainer>
      {
        userData.id?(
          <Stack.Navigator initialRouteName="EventDetail">
            <Stack.Screen options={{headerShown: false}} name="Home" component={HomeIndex}/>
            <Stack.Screen options={{headerShown: false}} name="EventDetail" component={EventDetail}/>
          </Stack.Navigator>
        ):(
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  );
}

export default IndexApp;