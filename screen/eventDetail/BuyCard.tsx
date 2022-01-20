import { Box, Container, HStack, ScrollView, Text, useDisclose, Actionsheet, VStack } from 'native-base';
import { Dimensions, Pressable, View, Platform } from 'react-native';
// import ReactSwipeButton from 'react-swipe-button'
// import SwipeButton from 'rn-swipe-button';
// import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';


export const BuyCard = () => {
    const { isOpen, onOpen, onClose } = useDisclose()
    
    return (
        <>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content bg='#6C38FF' p='0'> 
                    <Box mb='3'><Text fontWeight={'bold'} fontSize={'20'} color={'#A3E9FF'}>Buy YES</Text></Box>
                    <Box bg='#ffffff' w="100%">
                        <VStack m='3'>
                            <Text fontWeight={'16'} fontSize={'lg'}>Will Virat Kohli hit his 71st international century on ongoing tour against SA?</Text>
                            <Text>Trade Price for Yes</Text>
                            
                        </VStack>
                    </Box>
                </Actionsheet.Content>
            </Actionsheet>
      
        <HStack borderTopRadius={25} bg={'#6C38FF'} alignItems="center" position='absolute' bottom='0' left='0' right='0'>
            <Box flex={1} m='4' mr='0' alignItems={'center'}>
                <Pressable onPress={onOpen}>
                    <Text py='2' px='12' borderRadius={'2xl'} bg='#FFCACA' fontSize={'17'} fontWeight={'bold'} color={'#333333'}>Buy NO</Text>
                </Pressable>
            </Box>
            <Box flex={1} m='4' ml='0' alignItems={'center'}>
                <Pressable>
                    <Text py='2' px='12' borderRadius={'2xl'} bg='#A3E9FF' fontSize={'17'} fontWeight={'bold'} color={'#333333'}>Buy Yes</Text>
                </Pressable>
            </Box>
        </HStack>
    </>
    )
}