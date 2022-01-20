import * as React from 'react';
import { Box, HStack, ScrollView, Text, VStack } from 'native-base';
import { Dimensions, Pressable, View } from 'react-native';
import { Area, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

interface ITradeDetailProps{
    graphData: {[key: string]: number}
}

export const TradeDetail = (props: ITradeDetailProps) => {
    const {graphData} = props;
    const dimensions = Dimensions.get('window');
    return(
        <Box bg='#FFFFFF'>
            <LineChart
                width={dimensions.width-10}
                height={300}
                data={Object.keys(graphData).map(key=> {return {name: key, Yes: graphData[key], No: 10-graphData[key]}})}
                margin={{ top: 15, right:10, left: -30, bottom: 30 }}
                >
                <XAxis tick={false} label={{value: "Time ->"}} dataKey="name" />
                <YAxis axisLine={false} domain={[0, 10]}/>
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="Yes" stroke="#49DFFC"/>
                <Line autoReverse={true} type="monotone" dataKey="No" stroke="#FFBFC8"/>
            </LineChart>
            <Box px='4'>
                <Text>Total Trades: 3487</Text>
                <HStack mt={4}>
                    <VStack flex={1}>
                        <Text fontWeight={'bold'}>Start Date & Time</Text>
                        <Text>21st December 2021</Text>
                    </VStack>
                    <VStack flex={1}>
                        <Text fontWeight={'bold'}>Settlement Date & Time</Text>
                        <Text>19th January 2022</Text>
                    </VStack>
                </HStack>
                <VStack mt={4}>
                    <Text fontWeight={'bold'}>Context</Text>
                    <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, et accumsan accumsan at malesuada. Leo dictum orci felis suscipit at ut est, enim. Elementum in tempor consequat praesent diam, felis dictum. Facilisi malesuada in sed id. Dapibus sed enim tortor eu.
                        \nRrhoncus elementum ornare aliquam at. Praesent ornare mauris tincidunt erat ipsum nisl. Fringilla posuere augue ultrices egestas sed pharetra, malesuada sit nulla. Quis id laoreet morbi orci mauris, dolor tortor, eu et. </Text>
                </VStack>
                <VStack mt={4}>
                    <Text fontWeight={'bold'}>Source of Settlement</Text>
                    <Text mt={2}>www.icc-cricket.com</Text>
                </VStack>
            </Box>
            <br />
            <br />
            <br />
            <br />
            <br />
        </Box>
    )
}