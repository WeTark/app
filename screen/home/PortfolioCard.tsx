import { HStack, Stack, VStack, Text, Icon, Pressable, Avatar, Box, ScrollView, Divider, Center } from 'native-base';
import { Image } from 'react-native';

export const PortfolioCard = (props) => {
    const { event } = props;
    const insertDecimal = (num) => {
        return (num).toFixed(1);
    }
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const totalBalance = (eventAmount) => {
        var bal = (eventAmount?.NO?.totalAmount ?? 0) + (eventAmount?.NO?.totalPendingAmount ?? 0) +
                    (eventAmount?.YES?.totalAmount ?? 0) + (eventAmount?.YES?.totalPendingAmount ?? 0)
        return(insertDecimal(bal))
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
                                <Text bg='rgba(108, 56, 255, 0.2)' borderRadius={'4'} py='1' px='2'>Total: ₹{totalBalance(event.amount)}</Text>
                            </HStack>
                            <Pressable onPress={()=>{}}>
                                <Text fontSize={'15'} fontWeight={'500'}>{event.title}</Text>
                            </Pressable>
                            
                        </Box>
                    </HStack>
                    <Divider/>
                    
                    <HStack mt='1' mb='3'>
                        <Box flex={1}>
                            <HStack flex={1} py='1' pr='1'>
                                <Text alignSelf={'center'} color={'#D2434C'} fontWeight={'bold'} p='2'>No</Text>
                                {/* <Divider orientation="vertical"/> */}
                                <VStack p='2' flex={1}>
                                    <HStack>
                                        <Text flex={1} color={'#D2434C'}>Matched:</Text>
                                        <Text color={'#D2434C'}>₹{insertDecimal(event?.amount?.NO?.totalAmount ?? 0)}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text flex={1} color={'#D2434C'}>In process:</Text>
                                        <Text color={'#D2434C'}>₹{insertDecimal(event?.amount?.NO?.totalPendingAmount ?? 0)}</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Box>

                        <Divider orientation="vertical" w='0.5'/>

                        <Box flex={1}>
                            <HStack flex={1} py='1' pl='1'>
                                <Text alignSelf={'center'} color={'#1E738E'} fontWeight={'bold'} p='2'>Yes</Text>
                                {/* <Divider orientation="vertical" /> */}
                                <VStack p='2' flex={1}>
                                    <HStack>
                                        <Text flex={1} color={'#1E738E'}>Matched:</Text>
                                        <Text color={'#1E738E'}>₹{insertDecimal(event?.amount?.YES?.totalAmount ?? 0)}</Text>
                                    </HStack>
                                    <HStack>
                                        <Text flex={1} color={'#1E738E'}>In process:</Text>
                                        <Text color={'#1E738E'}>₹{insertDecimal(event?.amount?.YES?.totalPendingAmount ?? 0)}</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
        </>
    )
}