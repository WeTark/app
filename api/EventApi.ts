import axios from "axios";
import { INewTrade } from "../utils/swipeButton/SwipeButton.component.web";

export default class EventApi{
    // private static baseUrl = 'https://api.wetark.in'
    private static baseUrl = 'http://localhost:8080'

    static getAllTrendingEvent(token, page, size){
        return axios.get(`${this.baseUrl}/event/all/trending?page=${page}&size=${size}`,{
            headers: {
                Authorization: token
            }
        })
    }

    static getAllEventByTag(token, page, size, tag){
        return axios.get(`${this.baseUrl}/event/all?page=${page}&size=${size}&tag=${tag}`,{
            headers: {
                Authorization: token
            }
        })
    }

    static getUserPortfolio(token){
        return axios.get(`${this.baseUrl}/user/portfolio`,{
            headers: {
                Authorization: token
            }
        })
    }
    
    static getAllTags(token, page, size){
        return axios.get(`${this.baseUrl}/tag/all?page=${page}&size=${size}`,{
            headers: {
                Authorization: token
            }
        })
    }

    static getAllHighlightTags(token, page, size){
        return axios.get(`${this.baseUrl}/tag/highlight?page=${page}&size=${size}`,{
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

    static newTrade(token, tradeDetail:INewTrade){
        return axios.post(`${this.baseUrl}/trade`, tradeDetail,{
            headers: {
                Authorization: token
            }
        })
    }

    static getPendingTrade(token, id, tradeType){
        return axios.get(`${this.baseUrl}/trade/pending/summary?eventId=${id}&tradeType=${tradeType}`,{
            headers: {
                Authorization: token
            }
        })
    }
}