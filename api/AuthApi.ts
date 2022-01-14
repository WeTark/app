import axios from "axios";

export default class AuthApi{
    private static baseUrl = 'https://api.wetark.in/api'

    static getUser(token){
        return axios.get(`${this.baseUrl}/auth/me`,{
            headers: {
                Authorization: token
            }
        })
    }

    static authenticateUser(loginDetail:{username: string, password: string}){
        return axios.post(`${this.baseUrl}/auth/signin`, loginDetail)
    }

}