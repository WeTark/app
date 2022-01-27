import {
    Box,
    Text,
    ScrollView,
    Spinner
  } from 'native-base';
import { useEffect, useState } from 'react';
import { getStoreData } from '../../action/Store';
import EventApi from '../../api/EventApi';
import { Banner } from '../../utils/Banner';
import { EventCard } from '../home/EventCard';

export const EventByTag = (props) => {
    const tag =  props.route.params.tag;
    const imageUrl =  props.route.params.imageUrl;
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const openEventsByTag = (tag, imageUrl) => props.navigation.navigate('EventByTag', {tag:tag, imageUrl: imageUrl})

    const openDetail = (eventId, title, imageUrl, tags) => {props.navigation.navigate('EventDetail', {eventId: eventId, title: title, imageUrl: imageUrl, tags: tags.map(row=>row.name).join('---')})}

    useEffect(()=>{
        props.navigation.setOptions({title: '#'+tag})
    },[])

    useEffect(()=>{
        getStoreData('token').then(token=>{
            EventApi.getAllEventByTag(token, 0, 10, tag).then(response => {
                setIsLoading(false)
                setEvents(response.data)
            }).catch(e=>{})
        }).catch(e=>{})
      }, [])

    return(
        <Box bg='#ffffff' flex={1} w="100%">
            <Banner imageUrl={imageUrl} title={tag} />
            {/* <Box zIndex={10} borderTopRadius={'20'} mt='-5' h='5' bg='#FFFFFF'/> */}
            <ScrollView
                borderTopRadius={'20'}
                mt='-5'
                bg='#FFFFFF'
                showsVerticalScrollIndicator={false}
            >
                {
                    isLoading? (
                        <Spinner mt='50%' size={'lg'} color="indigo.500" />
                    ):(
                        events.map((event, key)=>(
                            <EventCard event={event} openDetail={openDetail} key={key} openEventsByTag={openEventsByTag}/>
                        ))
                    )
                }
            </ScrollView>
        </Box>
    )
}