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
import { LoginOtp } from './screen/login/LoginOtp';
import { LoginBasicDetail } from './screen/login/LoginBasicDetail';
import { LoginPassword } from './screen/login/LoginPassword';
import { EventByTag } from './screen/eventByTag/Index';
import { Button, Pressable } from 'native-base';
import { LeftArrowIcon } from './assets/leftArrowIcon';

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
  const linking = {
    prefixes: ['https://wetark.in', 'wetark://'],
    config: {
      screens: {
        Home: 'home',
        EventDetail: 'eventdetail',
        Login: 'login',
      }
    },
  };

  return (
    <NavigationContainer linking={linking}>
      {
        userData.id?(
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerShown: false}} name="Home" component={HomeIndex}/>
            <Stack.Screen options={{headerShown: false}} name="EventDetail" component={EventDetail}/>
            <Stack.Screen options={{
               headerLeft: () => (
                <Pressable mx='4' p='2' borderRadius={'10'}
                  bg={'rgba(0, 0, 0, 0.2)'}
                ><LeftArrowIcon/></Pressable>
                ),
                title:'',
                headerStyle: {
                  backgroundColor: '#6C38FF',
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }} name="EventByTag" component={EventByTag}
              initialParams={{ tag: 'SAvsEng', imageUrl:'' }}
            />
          </Stack.Navigator>
        ):(
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginPhone}/>
            <Stack.Screen options={{headerShown: false}} name="LoginOtp" component={LoginOtp}/>
            <Stack.Screen options={{headerShown: false}} name="LoginBasicDeail" component={LoginBasicDetail}/>
            <Stack.Screen options={{headerShown: false}} name="LoginPassword" component={LoginPassword}/>
            
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  );
}

export default IndexApp;