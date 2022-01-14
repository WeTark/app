import { Heading, NativeBaseProvider, VStack, Text, Input, Icon, Button } from 'native-base'
import * as React from 'react'
import { MaterialIcons } from "@expo/vector-icons"
import AuthApi from '../../api/AuthApi';
import { setStoreData } from '../../action/Store';
import { useDispatch } from 'react-redux';
import { USER_REQUEST_SUCCESS } from '../../action/UseActionTypes';

export const LoginScreen = ({navigation}) => {
    const [ loginDetail, setLoginDetail ] = React.useState({username: '', password:''});
    const dispatch = useDispatch();
    
    const handleLogin = () => {
        AuthApi.authenticateUser(loginDetail).then(response=>{
            setStoreData('token', response.data.accessToken);
            dispatch({type: USER_REQUEST_SUCCESS, payload: response})
            navigation.navigate('Home')
        })
    }

    return(
        <NativeBaseProvider>
            <VStack space={4} alignItems="center">
                <Heading mt="10" mb="10">
                    WeTark
                </Heading>
                <Heading textAlign="center">
                    Get started with the future of information! 
                </Heading>
                <Text textAlign="center" fontSize="lg">Enter your mobile number to continue</Text>
                
                <Input
                    size="xl"
                    w={{
                    base: "75%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="person" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                    }
                    placeholder="Name"
                    onChangeText={(username) =>setLoginDetail({...loginDetail, username: username})}
                />
                <Input
                    style={{borderColor: '#000000', borderWidth: 1}}
                    size="xl"
                    w={{
                    base: "75%",
                    md: "25%",
                    }}
                    // InputRightElement={
                    // <Icon
                    //     as={<MaterialIcons name="visibility-off" />}
                    //     size={5}
                    //     mr="2"
                    //     color="muted.400"
                    // />
                    // }
                    placeholder="Password"
                    onChangeText={(password) =>setLoginDetail({...loginDetail, password: password})}
                />
                <Button
                    size="lg"
                    onPress={handleLogin}
                >
                    Continue
                </Button>
            </VStack>
        </NativeBaseProvider>
    )
}