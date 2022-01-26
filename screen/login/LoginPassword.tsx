import {
    Circle, HStack, Box, Text, Center, VStack, Container, View, Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    Button,
    Pressable,
  } from "native-base"
import { useState } from "react";
import Svg, { Path } from "react-native-svg"
import { useDispatch } from "react-redux";
import { setStoreData } from "../../action/Store";
import { USER_REQUEST_SUCCESS } from "../../action/UseActionTypes";
import AuthApi from "../../api/AuthApi";
import { EditIcon } from "../../assets/editIcon";
import { OtpField } from "../../utils/otpField/OtpField.component"

export interface ILoginPassword{
    username: string,
    password?: string,
}
export const LoginPassword = (props) => {
    const {navigation} = props
    const [ isLoading, setIsLoading ] = useState(false);
    const [ basicDetail, setBasicDetail ] = useState<ILoginPassword>({username: props.route.params.phoneNo});
    const [ otp, setOtp ] = useState("");
    const dispatch = useDispatch();

    const registerUser = () => {
        setIsLoading(true);
        console.log(basicDetail)
        AuthApi.authenticateUser(basicDetail).then(response=>{
            setStoreData('token', response.data.accessToken);
            dispatch({type: USER_REQUEST_SUCCESS, payload: response})
            navigation.navigate('Home')
            // navigation.navigate('LoginOtp', {phoneNo: phoneNo, session_id: response.data.Details})
        }).catch(e=>setIsLoading(false))
    }

    const isDisabled = () => {
        return false
    }

    return(
        <View overflow={'hidden'} flex={1} bg='#F2F2F2'>
            <Circle position={'absolute'} top='-300' left={'-410'} size={'980'} bg="#6C38FF" opacity={'0.1'}/>
            <VStack flex={1}>
                <Box flex={1}>
                    <Center>
                        <Heading mt='40' mb='20'>Enter Password</Heading>
                        <Input
                            fontSize={'18'}
                            px='3'
                            mt='10'
                            placeholder="Password"
                            value={basicDetail?.password}
                            onChangeText={(value) => setBasicDetail({...basicDetail, password: value})}
                            borderRadius={'15'}
                            bg={'#FFFFFF'}
                            w={{
                                base: "60%",
                                md: "285",
                            }}
                        />
                        <Button isLoading={isLoading}  isDisabled={isDisabled()} _text={{fontSize:'18'}} mt={'5'} w='40%' borderRadius={'22'} onPress={registerUser} colorScheme="indigo">Continue</Button>
                    </Center>
                </Box>
                <Center margin={'5'}>
                    <Svg
                        width={120}
                        height={29}
                        fill="none"
                    >
                        <Path
                        d="M108.973 14.1c.578-.627 1.132-1.242 1.663-1.844.53-.627 1.024-1.217 1.482-1.772 1.953-2.247 4.719-1.446 7.628-1.446a245.934 245.934 0 0 1-3.76 4.23 102.671 102.671 0 0 1-3.977 4.121c.723.65 1.47 1.434 2.242 2.35.771.892 1.518 1.82 2.241 2.784a41.547 41.547 0 0 1 1.989 2.892 37.439 37.439 0 0 1 1.518 2.64h-6.182a57.4 57.4 0 0 0-1.338-2.062c-.482-.77-1-1.53-1.554-2.277a26.324 26.324 0 0 0-1.772-2.205 13.776 13.776 0 0 0-1.807-1.772v8.315h-5.387V.868L107.346 0c-.047 10.68-1.964 18.158 1.627 14.1ZM96.475 13.223c-1.78-.255-2.433-.16-3.814.254l-.208 14.582h-5.387V10.056c6.612-1.919 9.112-2 12.969-.393-.492 2.42-1.78 3.814-3.56 3.56ZM76.811 24.21c.53 0 1.037-.011 1.519-.036.482-.024.867-.06 1.157-.108v-4.085a9.946 9.946 0 0 0-.977-.145 10.872 10.872 0 0 0-1.193-.072c-.506 0-.988.036-1.446.108a3.41 3.41 0 0 0-1.157.326 2.017 2.017 0 0 0-.795.687c-.193.289-.29.65-.29 1.084 0 .844.278 1.434.832 1.772.579.313 1.362.47 2.35.47Zm-.434-15.762c1.591 0 2.917.181 3.977.543 1.06.361 1.904.88 2.53 1.554.651.675 1.11 1.494 1.375 2.458.265.964.397 2.037.397 3.218v11.207c-.771.169-1.844.362-3.217.579-1.374.24-3.037.361-4.99.361-1.228 0-2.35-.108-3.361-.325-.989-.217-1.844-.567-2.567-1.049a5.017 5.017 0 0 1-1.663-1.952c-.386-.795-.579-1.771-.579-2.928 0-1.109.217-2.049.651-2.82a5.3 5.3 0 0 1 1.808-1.844c.747-.458 1.602-.783 2.567-.976a13.63 13.63 0 0 1 3-.325c.699 0 1.314.036 1.844.108.554.048 1 .12 1.338.217v-.506c0-.916-.278-1.651-.832-2.205-.554-.555-1.518-.832-2.892-.832-.916 0-1.82.072-2.712.217-3.14.424-2.492-.585-3-3.796.313-.096.699-.193 1.157-.29.482-.12 1-.216 1.554-.288a18.946 18.946 0 0 1 1.736-.217 16.386 16.386 0 0 1 1.88-.109ZM68.804 3.051v3.443c0 1.134-.918 1.389-1.426 1.366-.509-.024-6.13 0-6.13 0v20.245h-5.64V7.86h-7.555V5.455c0-1.918 0-2.404 3.56-2.404h17.191ZM30.355 18.607c0-1.687.253-3.157.76-4.41.53-1.278 1.217-2.338 2.06-3.182a8.543 8.543 0 0 1 2.893-1.916 9.252 9.252 0 0 1 3.398-.65c2.7 0 4.832.83 6.399 2.494 1.566 1.639 2.35 4.06 2.35 7.266 0 .314-.012.663-.037 1.049-.024.361-.048.687-.072.976h-12.22c.121 1.108.64 1.988 1.555 2.639.916.65 2.145.976 3.688.976.988 0 1.952-.084 2.892-.253 3.201-.64 2.532.418 3.073 3.688-.29.144-.675.289-1.157.433-.482.145-1.024.266-1.627.362-.578.12-1.205.217-1.88.29-.675.071-1.35.108-2.024.108-1.711 0-3.206-.253-4.483-.76-1.253-.506-2.302-1.193-3.145-2.06a8.75 8.75 0 0 1-1.844-3.145c-.386-1.206-.579-2.507-.579-3.905Zm12.654-2.06a5.05 5.05 0 0 0-.253-1.338 2.983 2.983 0 0 0-.615-1.157 3.03 3.03 0 0 0-1.048-.832c-.41-.217-.928-.325-1.555-.325-.602 0-1.12.108-1.554.325a3.02 3.02 0 0 0-1.085.796c-.29.337-.518.735-.687 1.193-.145.434-.253.88-.325 1.337h7.122ZM18.655 9.71c.982 2.836 1.964 6.436 3.273 9.927 1.101-4.322 1.524-6.19 2.29-10.582 1.2-5.455 1.746-4.582 6.823-6.004-1.913 8.404-3.768 16.586-6.168 25.054H19.4l-4.736-12.832-4.808 12.832h-5.17C2.713 22.11.546 13.637 0 11.673c4.91-1.2 5.127-1.418 6.218 2.836l1.452 5.346-.579 1.31c1.567-3.515 2.997-6.92 3.927-9.71.873-2.618 1.072-3.094 3.646-3.818 2.573-.725 2.996-.803 3.991 2.072Z"
                        fill="#6C38FF"
                        />
                    </Svg>
                </Center>
            </VStack>
        </View>
    )
}