import axios from "axios";

export default class EventApi{
    private static baseUrl = 'https://api.wetark.in'

    static getAllEvent(token, page, size, tag){
        return axios.get(`${this.baseUrl}/event/all?page=${page}&size=${size}`,{
            headers: {
                Authorization: token
            }
        })
    }

    static getEventById(token, id, page, size){
        return axios.get(`${this.baseUrl}/event?id=${id}&page=${page}&size=${size}`,{
            headers: {
                Authorization: token
            }
        })
    }

    static getEventGraphData(token, id){
        return axios.get(`${this.baseUrl}/matched-trade/graph?eventId=${id}`,{
            headers: {
                Authorization: token
            }
        })
    }
}