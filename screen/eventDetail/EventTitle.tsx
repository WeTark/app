import * as React from 'react';
import { Box, Text, HStack, Center, Pressable } from 'native-base';

interface IEventTitleProps{
    selected: number,
    setSelected: (value: number) => void
}
export const EventTitle = (props: IEventTitleProps) => {
    const { selected, setSelected } = props;
    
    return(
        <Box bg='#F6F2FF'>
            <Box px='4' py='3'>
                <HStack><Text color='#0094FF'>#cricket  </Text><Text color='#0094FF'>#SAvsIND</Text></HStack>
                <Text my='1' color='#000000'>Will Virat Kohli hit his 71st international century on ongoing tour against SA?</Text>
                <Text my='2' color='#000000' opacity='0.6'>Total Trades: 3482</Text>
            </Box>
            <HStack>
                <Pressable fontWeight={selected === 0 ?'extrabold':'normal'} bg={selected === 0 ? '#F6F2FF': '#FFFFFF'} flex={1} onPress={() => setSelected(0)}>
                    <Box borderTopRightRadius={selected === 0 ?'18':'0'} borderBottomRightRadius={selected === 0 ?'0' :'18'} py='2.5' bg={selected === 0 ?'#FFFFFF': '#F6F2FF'}><Center _text={{color:'black'}}>Trade</Center></Box>
                </Pressable>
                <Pressable fontWeight={selected === 1 ?'extrabold':'normal'} bg={selected === 1 ? '#F6F2FF': '#FFFFFF'} flex={1} onPress={() => setSelected(1)}>
                    <Box borderTopLeftRadius={selected === 1 ?'18':'0'} borderBottomLeftRadius={selected === 1 ? '0' :'18'} py='2.5' bg={selected === 1 ?'#FFFFFF': '#F6F2FF'}><Center _text={{color:'black'}}>Discussion</Center></Box>
                </Pressable>
            </HStack>
        </Box>
    )
}