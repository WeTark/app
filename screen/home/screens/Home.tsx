import { HStack, Stack, VStack, Text, Icon, Pressable, Box, ScrollView, Spinner, Center } from 'native-base';
import { PurpleLogo } from '../../../assets/purpleLogo';
import { Entypo } from '@expo/vector-icons'; 
import { NotificationIcon } from '../../../assets/notificationIcon';
import { getStoreData } from '../../../action/Store';
import EventApi from '../../../api/EventApi';
import { EventCard } from '../EventCard';
import { useEffect, useState } from 'react';
import { Avatar } from '../../../utils/Avatar';


export const Home = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState([]);
    const [selectedTag, setSelectedTag] = useState('Trending');
    const [tags, setTags] = useState([]);
    const [higlightTags, setHiglightTags] = useState([]);
    
    const openDetail = (eventId, title, imageUrl, tags) => {navigation.navigate('EventDetail', {eventId: eventId, title: title, imageUrl: imageUrl, tags: tags.map(row=>row.name).join('---')})}
    const openEventsByTag = (tag, imageUrl) => navigation.navigate('EventByTag', {tag:tag, imageUrl: imageUrl})

    const fetchTreding = () => {
        setIsLoading(true)
        setSelectedTag('Trending')
        getStoreData('token').then(token=>{
            EventApi.getAllTrendingEvent(token, 0, 10).then(response => {
                setIsLoading(false)
                setEvents(response.data)
            }).catch(e=>{})
        })
    }

    const fetchByTag = (tag:string) => {
        setIsLoading(true)
        setSelectedTag(tag)
        getStoreData('token').then(token=>{
            EventApi.getAllEventByTag(token, 0, 10, tag).then(response => {
                setIsLoading(false)
                setEvents(response.data)
            }).catch(e=>{})
        })
    }
    
    useEffect(()=>{
        getStoreData('token').then(token=>{
            EventApi.getAllTrendingEvent(token, 0, 10).then(response => {
                setIsLoading(false)
                setEvents(response.data)
            }).catch(e=>{})
            
            EventApi.getAllTags(token, 0, 10).then(response => {
                setTags(response.data)
            }).catch(e=>{})

            EventApi.getAllHighlightTags(token, 0, 10).then(response => {
                setHiglightTags(response.data)
            }).catch(e=>{})
        }).catch(e=>{})
      }, [])

    return(
        <>
            <VStack pt='5' bg='rgba(108, 56, 255, 0.1)'>
                <HStack>
                    <Stack flex={1} ml='5' alignSelf={'center'}>
                        <PurpleLogo />
                    </Stack>
                    <HStack flex={1} justifyContent={'flex-end'} alignItems={'center'} mr='5'>
                        <Pressable mr='2'>
                            <NotificationIcon />
                        </Pressable>
                        <Pressable>
                            <Avatar
                                width={32}
                                name="DG"
                                borderColor="#6C38FF"
                            />
                        </Pressable>
                    </HStack>
                </HStack>
                <Box mt='5' mb='3' ml='2' h='60'>
                    <ScrollView 
                        horizontal={true}                         
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            higlightTags.map(higlightTag=>(
                                <Pressable mx='1' onPress={()=>openEventsByTag(higlightTag.name, higlightTag.imageUrl)}>  
                                    <Avatar width={60} imageUrl={higlightTag.imageUrl} name={higlightTag.name}/>
                                </Pressable>
                            ))
                        }
                    </ScrollView>
                </Box>
            </VStack>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    my='2'
                >
                    <Pressable onPress={fetchTreding} borderRadius={'4'} p='1' bg={selectedTag === 'Trending'?'rgba(108, 56, 255, 0.2)':'#ffffff'} mx='2' alignSelf={'center'}>
                        <Text>Trending</Text>
                    </Pressable>
                    {
                        tags.map((tag,key)=>(
                            <Pressable onPress={()=>{fetchByTag(tag.name)}} key={key} borderRadius={'4'} p='1' alignSelf={'center'} bg={selectedTag === tag.name?'rgba(108, 56, 255, 0.2)':'#ffffff'} mx='2'>
                                <Text>{tag.name}</Text>
                            </Pressable>
                        ))
                    }
                </ScrollView>
                {
                    isLoading? (
                        <Spinner mt='50%' size={'lg'} color="indigo.500" />
                    ):(
                        events.map((event, key)=>(
                            <EventCard event={event} openDetail={openDetail} key={key} openEventsByTag={openEventsByTag}/>
                        ))
                    )
                }
                <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
            </ScrollView>
        </>
    )
}