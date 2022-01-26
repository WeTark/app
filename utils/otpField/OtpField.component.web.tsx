 import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";

interface IOtpFieldProp{
    OTP: string,
    setOTP: (OTP:string)=>void
}

export const OtpField = (props: IOtpFieldProp) => {
    const { OTP, setOTP } = props;

    return(<>
          <OTPInput value={OTP} placeholder='------' onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} style={{marginTop: '10px', marginLeft:'4px'}} inputStyles={{marginRight: '8px'}}/>
    </>)
}