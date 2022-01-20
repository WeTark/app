import * as React from 'react';
import { HStack, Stack, VStack, Text, Icon, Pressable, Avatar, Box, ScrollView } from 'native-base';
import { PurpleLogo } from '../../assets/purpleLogo';
import { Entypo } from '@expo/vector-icons'; 
import { NotificationIcon } from '../../assets/notificationIcon';
import { Image } from 'react-native';
import { getStoreData } from '../../action/Store';
import EventApi from '../../api/EventApi';
import { EventCard } from './EventCard';

export const Home = ({navigation}) => {
    const [events, setEvents] = React.useState([]);
    
    const openDetail = (eventId) => navigation.navigate('EventDetail', {eventId: eventId})
    

    React.useEffect(()=>{
        getStoreData('token').then(token=>{
            EventApi.getAllEvent(token, 0, 10, null).then(response => {
                setEvents(response.data)
                console.log(response.data);
          }).catch(e=>{})
        })
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
                        <Avatar
                            bg="#6C38FF"
                            size={'8'}
                        >
                            SS
                        </Avatar>
                    </HStack>
                </HStack>
                <Box mt='7' mb='3'>
                    <ScrollView 
                        horizontal={true}                         
                        showsVerticalScrollIndicator={false}
                    >
                        <Avatar
                            bg="green.500"
                            size={'lg'}
                            mx='1'
                        >
                            SS
                        </Avatar>
                        <Avatar
                            bg="green.500"
                            size={'lg'}
                            mx='1'
                        >
                            SS
                        </Avatar>
                        <Avatar
                            bg="green.500"
                            size={'lg'}
                            mx='1'
                        >
                            SS
                        </Avatar>
                        <Avatar
                            bg="green.500"
                            size={'lg'}
                            mx='1'
                        >
                            SS
                        </Avatar>
                        <Avatar
                            bg="green.500"
                            size={'lg'}
                            mx='1'
                        >
                            SS
                        </Avatar>
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
                    <Pressable borderRadius={'4'} p='1' bg='rgba(108, 56, 255, 0.2)' mx='2' alignSelf={'center'}>
                        <Text>Trending</Text>
                    </Pressable>
                    <Pressable borderRadius={'4'} p='1' alignSelf={'center'} mx='2'>
                        <Text>For You</Text>
                    </Pressable>
                    <Pressable borderRadius={'4'} p='1' alignSelf={'center'} mx='2'>
                        <Text>Cricket</Text>
                    </Pressable>
                    <Pressable borderRadius={'4'} p='1' alignSelf={'center'} mx='2'>
                        <Text>NBA</Text>
                    </Pressable>
                    <Pressable borderRadius={'4'} p='1' alignSelf={'center'} mx='2'>
                        <Text>Politics</Text>
                    </Pressable>
                    <Pressable borderRadius={'4'} p='1' alignSelf={'center'} mx='2'>
                        <Text>Finance</Text>
                    </Pressable>
                    <Pressable borderRadius={'4'} p='1' alignSelf={'center'} mx='2'>
                        <Text>NBA</Text>
                    </Pressable>
                    <Pressable borderRadius={'4'} p='1' alignSelf={'center'} mx='2'>
                        <Text>Politics</Text>
                    </Pressable>
                    <Pressable borderRadius={'4'} p='1' alignSelf={'center'} mx='2'>
                        <Text>Finance</Text>
                    </Pressable>
                </ScrollView>
                {
                    events.map((event, key)=>(
                        <EventCard event={event} openDetail={openDetail} key={key}/>
                    ))
                }
            </ScrollView>
        </>
    )
}