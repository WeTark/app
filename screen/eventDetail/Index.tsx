import { Box, Container, HStack, ScrollView, Spinner, Text } from 'native-base';
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
import { IEvent } from '../home/EventCard';
import { useEffect, useState } from 'react';

export const EventDetail = (props) => {

    // const eventId =  '8a8080847c0e73b2017c0e7aa6950001'
    const eventId =  props.route.params.eventId;
    const title =  props.route.params.title;
    const imageUrl = props.route.params.imageUrl;
    const tags = props.route.params.tags;

    const [isLoading, setIsLoading] = useState(true);
    const [ selected, setSelected ] = useState(0);
    const [ graphData, setGraphData ] = useState({});
    const [ event, setEvent ] = useState<IEvent>();
    const dimensions = Dimensions.get('window');

    useEffect(()=>{
        getStoreData('token').then(token=>{
            EventApi.getEventById(token, eventId, 0, 10).then(response=>{
                setEvent(response.data.event)
                setIsLoading(false)
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
                                    uri: imageUrl,
                                }}
                                style={{ height: 250}}
                            />
                            <EventTitle title={title} tags={tags} selected={selected} setSelected={setSelected} />
                            {
                                isLoading? (
                                    <Spinner mt='50%' size={'lg'} color="indigo.500" />
                                ):(
                                    <TradeDetail event={event} graphData={graphData}/>
                                )
                            }
                        </ScrollView>
                        <BuyCard eventId={eventId} title={title} yesPrice={event?.yesPrice} noPrice={event?.noPrice}/>
                    </>
                ):(
                    <>
                        <EventTitle title={title} tags={tags} selected={selected} setSelected={setSelected} />
                        <View style={{ backgroundColor: "#ffffff", flex: 1}}>
                            <Chat rcChannelId={event.rcChannelId}/>
                        </View>
                        
                    </>
                )
            }
        </>
    )
}