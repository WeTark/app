import { HStack, Stack, VStack, Text, Icon, Pressable, Avatar, Box, ScrollView, Divider } from 'native-base';
import { Image } from 'react-native';

export const PortfolioCard = (props) => {
    const { event } = props;
    const insertDecimal = (num) => {
        return (num).toFixed(1);
    }
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return(
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
                                onPress={()=>{}}
                        >
                            <Image
                                source={{
                                    uri: event.picture,
                                }}
                                style={{ height: 100, width:'100%', borderRadius: 10}}
                            />
                        </Pressable>
                        <Box mx='3' flex={2} alignSelf={'center'}>
                            <HStack>
                                <Text flex={0} bg='rgba(108, 56, 255, 0.2)' borderRadius={'4'} p='1'>Matched</Text>
                            </HStack>
                            <Pressable onPress={()=>{}}>
                                <Text fontSize={'15'} fontWeight={'500'}>{event.title}</Text>
                            </Pressable>
                            
                        </Box>
                    </HStack>
                    <Divider/>
                    
                    <HStack mt='1' mb='3'>
                        <Box flex={1} alignSelf={'center'}>
                            <Text color={'#979797'}>Invested amount: ₹{insertDecimal(randomIntFromInterval(1,6))} </Text>
                        </Box>
                        <Box textAlign={'right'}>
                            <Text p='1' bg='#D3FFBF' color={'#174800'} borderRadius={'5'}>Current value: ₹{insertDecimal(randomIntFromInterval(6,9))} </Text>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
        </>
    )
}