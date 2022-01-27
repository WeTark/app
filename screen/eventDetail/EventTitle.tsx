import * as React from 'react';
import { Box, Text, HStack, Center, Pressable } from 'native-base';
import { IEvent } from '../home/EventCard';

interface IEventTitleProps{
    title: string,
    tags: Array<string>,
    selected: number,
    setSelected: (value: number) => void
    openEventsByTag: (tag: string, imageUrl: string)=> void
}
export const EventTitle = (props: IEventTitleProps) => {
    const { title, tags, selected, setSelected, openEventsByTag } = props;
    
    return(
        <Box bg='#F6F2FF'>
            <Box px='4' py='3'>
                <Box style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {
                        tags?.map(tag=>(
                            <Pressable onPress={()=>{openEventsByTag(tag, '')}}><Text color='#0094FF' mr='1'>#{tag}</Text></Pressable>
                        ))
                    }
                </Box>
                <Text my='1' color='#000000'>{title}</Text>
                {/* <Text my='2' color='#000000' opacity='0.6'>Total Trades: 100</Text> */}
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