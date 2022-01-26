import { Box, Center, Divider, HStack, Pressable, Text, VStack } from "native-base"
import { TransactionsIcon } from "../../../assets/transactionsIcon"

export const Wallet = () => {
    return(
        <Box mx='5'>
            <Center mt='20'>
                <HStack>
                    <Text fontWeight={'bold'} fontSize={'45'}>₹542.</Text>
                    <Text fontWeight={'bold'} fontSize={'30'} mt='4'>50</Text>
                </HStack>
                <Text>Available Balance</Text>
            </Center>
            <HStack my='10' mx='3' >
                <Center  flex={1}> 
                    <Pressable p='2.5' w='130' bg='#F0EBFF' borderRadius={'10'}>
                        <Text fontSize={'15'} fontWeight={'bold'} alignSelf={'center'}>Withdraw</Text>
                    </Pressable>
                </Center>
                <Center flex={1}>
                    <Pressable p='2.5' w='130' bg='#6C38FF' borderRadius={'10'}>
                        <Text fontSize={'15'} fontWeight={'bold'} alignSelf={'center'} color={'#FFFFFF'}>Add</Text>
                    </Pressable>
                </Center>
            </HStack>
            <VStack>
                <Divider/>
                <HStack py='2'>
                    <Text flex={2}>Unplayed Money</Text>
                    <Text flex={1} textAlign={'right'}>₹220.00</Text>
                </HStack>
                <Divider/>
                <HStack py='2'>
                    <Text flex={2}>Winnings</Text>
                    <Text flex={1} textAlign={'right'}>₹322.50</Text>
                </HStack>
                <Divider/>
                <HStack py='2'>
                    <Text flex={2}>Money on hold</Text>
                    <Text flex={1} textAlign={'right'}>₹27.00</Text>
                </HStack>
                <Divider/>
                <HStack py='2'>
                    <Text flex={2}>Current Portfolio Money</Text>
                    <Text flex={1} textAlign={'right'}>₹55.75</Text>
                </HStack>
            </VStack>
            <Center mt='8'>
                <Pressable bg='rgba(108, 56, 255, 0.1)' p='3' borderRadius={'10'}>
                    <HStack space={'1'} alignItems={'center'}><Text>View Transactions History</Text><TransactionsIcon /></HStack>
                </Pressable>
            </Center>
        </Box>
    )
}