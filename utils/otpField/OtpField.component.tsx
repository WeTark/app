import OTPInputView from '@twotalltotems/react-native-otp-input'
import { StyleSheet, Text, View } from "react-native";

interface IOtpFieldProp{
  OTP: string,
  setOTP: (OTP:string)=>void
}

export const OtpField = (props: IOtpFieldProp) => {
    const styles = StyleSheet.create({
        borderStyleBase: {
          width: 30,
          height: 45
        },
      
        borderStyleHighLighted: {
          borderColor: "#03DAC6",
        },
      
        underlineStyleBase: {
          width: 30,
          height: 45,
          borderWidth: 0,
          borderBottomWidth: 1,
        },
      
        underlineStyleHighLighted: {
          borderColor: "#03DAC6",
        },
    });

    return(<>
    <Text>Hii3</Text>
    </>)
}