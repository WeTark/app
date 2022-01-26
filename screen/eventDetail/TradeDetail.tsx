import * as React from 'react';
import { Box, HStack, ScrollView, Text, VStack } from 'native-base';
import { Dimensions, Pressable, View } from 'react-native';
// import { Area, CartesianGrid, Line, LineChart, Tooltip,  } from 'recharts';
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { IEvent } from '../home/EventCard';
import date from 'date-and-time';

interface ITradeDetailProps{
    graphData: {[key: string]: number}
    event: IEvent
}

export const TradeDetail = (props: ITradeDetailProps) => {
    const {graphData, event} = props;
    const dimensions = Dimensions.get('window');

    const getTime = (dateString) => { 
        return date.format(new Date(dateString), 'hh:mm A')
    }
    const getDate = (dateString) => { 
        return date.format(new Date(dateString), 'ddd, MMM DD YYYY')
    }

    return(
        <Box bg='#FFFFFF'>
            <HStack mt='4' mx='4' alignItems={'center'}>
                <Text flex={1}>Last Traded Price</Text>
                <HStack flex={1}>
                    <HStack flex={1} alignItems={'center'}>
                        <Text fontWeight={'semibold'} color={'#D2434C'}>No</Text>
                        <Text fontWeight={'semibold'} color={'#D2434C'} bg='#FFBFC3' borderRadius={'4'} mx='2' py='1' px='2'>₹{event.noPrice}</Text>
                    </HStack>
                    <HStack flex={1} justifyContent={'flex-end'} alignItems={'center'}>
                        <Text fontWeight={'semibold'} color={'#1E738E'}>Yes</Text>
                        <Text fontWeight={'semibold'} color={'#1E738E'} bg='#A3E9FF' borderRadius={'4'} mx='2' py='1' px='2'>₹{event.yesPrice}</Text>
                    </HStack>
                </HStack>
            </HStack>
            <AreaChart
                // style={{ flex: 1,  }}
                yMax={10}
                yMin={0}
                style={{ height: 200, padding: 10 }}
                data={Object.values(graphData)}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(73, 223, 252, 0.7)' }}
            >
                <Grid />
            </AreaChart>
            <Box px='4'>
                <Text>Total Trades: 100</Text>
                <HStack mt={4}>
                    <VStack flex={1}>
                        <Text fontWeight={'bold'}>Start Date & Time</Text>
                        <Text>{getTime(event.startAt)}</Text>
                        <Text>{getDate(event.startAt)}</Text>
                    </VStack>
                    <VStack flex={1}>
                        <Text fontWeight={'bold'}>Settlement Date & Time</Text>
                        <Text>{getTime(event.expireAt)}</Text>
                        <Text>{getDate(event.expireAt)}</Text>
                    </VStack>
                </HStack>
                <VStack mt={4}>
                    <Text fontWeight={'bold'}>Context</Text>
                    <Text mt={2}>
                         {event?.description}
                    </Text>
                </VStack>
                <VStack mt={4}>
                    <Text fontWeight={'bold'}>Source of Settlement</Text>
                    <Text mt={2}>{event.sourceOfSettlement}</Text>
                </VStack>
            </Box>
            <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </Box>
    )
}