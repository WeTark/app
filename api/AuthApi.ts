import axios from "axios";
import { IBasicDetail } from "../screen/login/LoginBasicDetail";
import { ILoginPassword } from "../screen/login/LoginPassword";

export default class AuthApi{
    // private static baseUrl = 'https://api.wetark.in/api'
    private static baseUrl = 'http://localhost:8080/api'

    static getUser(token){
        return axios.get(`${this.baseUrl}/auth/me`,{
            headers: {
                Authorization: token
            }
        })
    }

    static authenticateUser(loginDetail:ILoginPassword){
        return axios.post(`${this.baseUrl}/auth/signin`, loginDetail)
    }

    static sendOtp(phoneNo: string){
        return axios.get(`${this.baseUrl}/auth/signin/${phoneNo}`)
    }

    static verifyOtp(otp: string, sessionId){
        return axios.get(`${this.baseUrl}/auth/verify-otp/${otp}/${sessionId}`)
    }

    static registerUser(basicDetail:IBasicDetail){
        return axios.post(`${this.baseUrl}/auth/signup`, basicDetail)
    }

}