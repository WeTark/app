import { HStack, Stack, VStack, Text, Icon, Pressable, Avatar, Box, ScrollView, Divider } from 'native-base';
import { Image } from 'react-native';

export interface IEvent{
    id: string
    title: string,
    description: string,
    yesPrice: number,
    noPrice: number,
    picture: string,
    tags: Array<string>,
    startAt: string,
    expireAt: string,
    sourceOfSettlement: string,
    rcChannelId: string,
}
interface IEventCardProps{
    event: IEvent
    openDetail: (eventId: string, title: string, imageUrl: string, tags:Array<string>)=> void
    openEventsByTag: (tag: string, imageUrl: string)=> void
}

export const EventCard = (props: IEventCardProps) => {
    const { event, openDetail, openEventsByTag } = props;
    const insertDecimal = (num) => {
        return (num).toFixed(1);
    }

    return (
        <>
            <Box
                my='2'
                mx='2.5'
                borderRadius={'10'}
                borderWidth={1}
                borderColor={'rgba(0, 0, 0, 0.25)'}
            >
                <VStack mx='3'>
                    <HStack my='3' flex={1}>
                        <Pressable
                                flex={1}
                                onPress={()=>{openDetail(event.id, event.title, event.picture, event.tags)}}
                        >
                            <Image
                                source={{
                                    uri: event.picture,
                                }}
                                style={{ height: 100, width:'100%', borderRadius: 10}}
                            />
                        </Pressable>
                        <Box mx='3' flex={2} alignSelf={'center'}>
                            <Box style={{flexDirection:'row', flexWrap:'wrap'}}>
                                {
                                    event?.tags?.map(tag=>(
                                        <Pressable onPress={()=>{openEventsByTag(tag['name'], tag['imageUrl'])}}><Text color='#0094FF' mr='1'>#{tag['name']}</Text></Pressable>
                                    ))
                                }
                            </Box>
                            <Pressable
                                onPress={()=>{openDetail(event.id, event.title, event.picture, event.tags)}}
                            >
                                <Text fontSize={'15'} fontWeight={'500'}>{event.title}</Text>
                            </Pressable>
                            
                        </Box>
                    </HStack>
                    <Divider/>
                    <HStack mt='2'>
                        <Pressable flex={1}>
                            <HStack>
                                <Text color={'#1E738E'} borderTopRadius={'8'} px='2' py='1' bg='#A3E9FF' fontSize={'16'} fontWeight={'500'}>Yes</Text>
                                <Text alignSelf={'center'} color={'#1E738E'} fontSize={'16'} fontWeight={'500'}> ₹{insertDecimal(event.yesPrice)}</Text>
                            </HStack>
                        </Pressable>
                        <Pressable flex={1} alignItems={'flex-end'}>
                            <HStack>
                                <Text alignSelf={'center'} color={'#D2434C'} fontSize={'16'} fontWeight={'500'}> ₹{insertDecimal(event.noPrice)} </Text>
                                <Text color={'#D2434C'} borderTopRadius={'8'} px='2' py='1' bg='#FFBFC3' fontSize={'16'} fontWeight={'500'}>No</Text>
                            </HStack>
                        </Pressable>
                    </HStack>
                    <HStack mt='0.5'>
                        <Box h='2' bg='#A3E9FF' borderBottomLeftRadius={'7'} flex={event.yesPrice}/>
                        <Box h='2' bg='#FFBFC3' borderBottomRightRadius={'7'} flex={event.noPrice}/>
                    </HStack>
                    <HStack mt='1' mb='3'>
                        <Box flex={1} alignSelf={'center'}>
                            <Text color={'#979797'}>100 people are trading</Text>
                        </Box>
                        {/* <Box textAlign={'right'}>
                            <Text p='1' bg='#D3FFBF' color={'#174800'} borderRadius={'5'}>Closing soon</Text>
                        </Box> */}
                    </HStack>
                </VStack>
            </Box>
        </>
    )
}