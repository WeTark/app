import { Box, Container, HStack, ScrollView, Text } from 'native-base';
import * as React from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { Chat } from './chat/Chat';
import { TradeDetail } from './TradeDetail';
import { Image } from 'react-native';
import { EventTitle } from './EventTitle';
import EventApi from '../../api/EventApi';
import { getStoreData } from '../../action/Store';
import {
    LineChart
  } from "react-native-chart-kit";
import { BuyCard } from './BuyCard';

export const EventDetail = (props) => {
    // const eventId =  props.route.params.eventId;
    const eventId =  '8a8080867de86cc4017de898a4680022'
    const [ selected, setSelected ] = React.useState(0);
    const [ graphData, setGraphData ] = React.useState({});
    const dimensions = Dimensions.get('window');
    React.useEffect(()=>{
        getStoreData('token').then(token=>{
            EventApi.getEventById(token, eventId, 0, 10).then(response=>{
                console.log(response.data)
            })
            EventApi.getEventGraphData(token, eventId).then(response=>{
                setGraphData(response.data)
            })
        })
    },[])

    return(
        <>
            {
                selected === 0 ? (
                    <>
                        <ScrollView
                            bg='#ffffff'
                            stickyHeaderIndices={[1]}
                            showsVerticalScrollIndicator={false}
                        >   
                            <Image
                                source={{
                                    uri: "https://wallpaperaccess.com/full/317501.jpg",
                                }}
                                style={{ height: Math.round(dimensions.width * 9 / 16), width: dimensions.width}}
                            />
                            <EventTitle selected={selected} setSelected={setSelected} />
                            <TradeDetail graphData={graphData}/>
                        </ScrollView>
                        <BuyCard />
                    </>
                ):(
                    <>
                        <EventTitle selected={selected} setSelected={setSelected} />
                        <View style={{ backgroundColor: "#ffffff", flex: 1}}>
                            <Chat />
                        </View>
                        
                    </>
                )
            }
        </>
    )
}