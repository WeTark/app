import * as React from 'react';
import {
    Box, Center, HStack, Pressable, ScrollView, Text,
  } from 'native-base';
import { getStoreData } from '../../../action/Store';
import EventApi from '../../../api/EventApi';
import { PortfolioCard } from '../PortfolioCard';

export const Portfolio = () => {
    const [portfolioEvents, setPortfolioEvents] = React.useState([]);
    const [ selected, setSelected ] = React.useState(0);
    React.useEffect(()=>{
        getStoreData('token').then(token=>{
            EventApi.getUserPortfolio(token).then(response => {
                setPortfolioEvents(response.data)
          }).catch(e=>{})
        })
    }, [])

    return(
        <>
        <Box bg='#F0EBFF'>
            <HStack mt='8' mx='3'>
                <HStack alignItems={'baseline'} flex='1'>
                    <Text fontWeight={'bold'}>Your rank</Text>
                    <Text fontSize={'20'} color={'#6C38FF'} fontWeight={'bold'}> 20</Text>
                    <Text fontWeight={'bold'}>/456</Text>
                </HStack>
                <Text flex={1} alignSelf={'center'} textAlign={'right'} fontWeight={'bold'}>View Leaderboard</Text>
            </HStack>
            <Box my='5' mx='3'>
                <HStack borderColor={'#6C38FF'} borderWidth={'0.5'} borderRadius={'40'}>
                    <Pressable flex={1} onPress={()=>setSelected(0)}>
                        <Center p='2' bg={selected===0?'#6C38FF':'#F0EBFF'} borderRadius={'40'}><Text fontWeight={'bold'} color={selected===0?'#ffffff':'#5F6265'}>Live Events</Text></Center>
                    </Pressable>
                    <Pressable flex={1} onPress={()=>setSelected(1)}>
                        <Center p='2' bg={selected===1?'#6C38FF':'#F0EBFF'} borderRadius={'40'}><Text fontWeight={'bold'} color={selected===1?'#ffffff':'#5F6265'}>Settled Events</Text></Center>
                    </Pressable>
                </HStack>
            </Box>
        </Box>
        <ScrollView>
            {
                portfolioEvents.map((event, key)=>(
                    <PortfolioCard event={event} key={key}/>
                ))
            }
            <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </ScrollView>
        </>
    )
}