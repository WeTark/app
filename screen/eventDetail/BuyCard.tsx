import { Box, Container, HStack, ScrollView, Text, useDisclose, Actionsheet, VStack, Slider, Center, Spinner } from 'native-base';
import { useEffect, useState } from 'react';
import { Dimensions, Pressable, View, Platform } from 'react-native';
import { getStoreData } from '../../action/Store';
import EventApi from '../../api/EventApi';
import { EditIcon } from '../../assets/editIcon';
import { SwipeButton } from '../../utils/swipeButton/SwipeButton.component';
import { OrderPlaced } from './OrderPlaced';

interface IBuyCard{
    eventId: string,
    title: string,
    yesPrice: number,
    noPrice: number
}

interface IPendingTrade{
    price: number,
    size: number
}

export const BuyCard = (props: IBuyCard) => {
    const { eventId, title, yesPrice, noPrice } = props;
    const { isOpen, onOpen, onClose } = useDisclose()
    const [ doublePrice, setDoublePrice ] = useState(10)
    const [ quantity, setQuantity ] = useState(1)
    const [ editPrice, setEditPrice ] = useState(false)
    const [ selectedType, setSelectedType ] = useState(-1)
    const [ showModal, setShowModal ] = useState(false);
    const [ newTradeResponse, setNewTradeResponse] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [pendingTrade, setPendingTrade] = useState<Array<IPendingTrade>>([]);

    useEffect(()=>{
        if(isOpen){
            setIsLoading(true)
            getStoreData('token').then(token=>{
                EventApi.getPendingTrade(token, eventId, selectedType===1?'NO':'YES').then(response=>{
                    setPendingTrade(response.data)
                    if(response.data.length>0){
                        setDoublePrice(20-2*response.data[response.data.length - 1].price)
                    }else{
                        setDoublePrice(selectedType===1?2*yesPrice:2*noPrice)
                    }
                    setIsLoading(false)
                })
            })
        }
    },[isOpen])
    
    const newTrade = () =>{
        getStoreData('token').then(token=>{
            EventApi.newTrade(token, {event_id: eventId, initialSize: quantity, price: doublePrice/2, tradeType: selectedType===1?'YES':'NO'}).then(response=>{
                setNewTradeResponse(response.data)
                setShowModal(true)
                onClose()
            })
        })
    }

    const openYes = () => {
        setSelectedType(1)
        onOpen()
    }

    const openNo = () => {
        setSelectedType(0)
        onOpen()
    }
    
    const numberToDecimal = (number:number) => {
        return (number).toFixed(1);
    }
    return (
        <>
            <OrderPlaced showModal={showModal} setShowModal={setShowModal} selectedType={selectedType} response={newTradeResponse}/>
            <Actionsheet isOpen={isOpen} onClose={onClose} maxW={'420px'} margin={'auto'}>
                <Actionsheet.Content bg='#6C38FF' p='0'> 
                <Box mb='3'><Text fontWeight={'bold'} fontSize={'20'} color={selectedType===1?'#A3E9FF':'#FFCACA'}>Buy {selectedType===1?'YES':'NO'}</Text></Box>
                    <Box bg='#ffffff' w="100%">
                        <VStack m='3'>
                            <Text my='2' fontWeight={'16'} fontSize={'lg'}>{title}</Text>
                            {
                                isLoading? (
                                    <Spinner size={'lg'} color="indigo.500" />
                                ):(
                                    <>
                                        <HStack my='2'>
                                            <HStack color={'#000000'} flex={1} alignItems={'center'}>
                                                {
                                                    !editPrice?(
                                                        <>
                                                            <Text>Trade Price for Yes</Text>
                                                            <Text fontSize={17} fontWeight={'bold'} ml='2' mr='1'>₹{numberToDecimal(doublePrice/2)}</Text>
                                                            <Pressable onPress={()=>{setEditPrice(true)}}>
                                                                <EditIcon />
                                                            </Pressable>
                                                        </>
                                                    ):(null)
                                                }
                                            </HStack>
                                            <Text color={'#979797'} flex={1} textAlign={'right'}>Available Trades {pendingTrade.filter(row=>row.price+doublePrice/2>=10).map(row=>row.size).reduce((a, b) => a + b, 0)}</Text>
                                        </HStack>
                                        {
                                            editPrice?(
                                                <>
                                                    <HStack my='2' alignItems={'center'}>
                                                        <Text flex={1} fontSize={16}>Select Price</Text>
                                                        <Text px={'4'} fontSize={16} bg='#E7E7E7' borderRadius={'4'} borderColor={'#000000'} borderWidth={'1'} fontWeight={'bold'}>₹{numberToDecimal(doublePrice/2)}</Text>
                                                    </HStack>
                                                    <Slider ml='2%' mr='2%' width={'96%'} defaultValue={doublePrice} minValue={1} maxValue={19} step={1} colorScheme="indigo"
                                                        onChange={v => {
                                                            setDoublePrice(Math.floor(v));
                                                        }}
                                                    >
                                                        <Slider.Track>
                                                        <Slider.FilledTrack />
                                                        </Slider.Track>
                                                        <Slider.Thumb />
                                                    </Slider>
                                                </>
                                            ):(null)
                                        }

                                        <HStack my='2' alignItems={'center'}>
                                            <Text flex={1} fontSize={16}>Select Quantity</Text>
                                            <Text px={'4'} fontSize={16} bg='#E7E7E7' borderRadius={'4'} borderColor={'#000000'} borderWidth={'1'} fontWeight={'bold'}>{quantity}</Text>
                                        </HStack>
                                        <Slider ml='2%' mr='2%' width={'96%'} defaultValue={quantity} minValue={1} maxValue={50} step={1} colorScheme="indigo"
                                            onChange={v => {
                                                setQuantity(Math.floor(v));
                                            }}
                                        >
                                            <Slider.Track>
                                            <Slider.FilledTrack />
                                            </Slider.Track>
                                            <Slider.Thumb />
                                        </Slider>
                                        <HStack my='4'>
                                            <Center flex={1}><Text fontWeight={'semibold'}>Investment ₹{numberToDecimal(quantity*doublePrice/2)}</Text></Center>
                                            <Center flex={1}><Text fontWeight={'semibold'}>Potential Gain ₹{numberToDecimal(10*quantity-quantity*doublePrice/2)}</Text></Center>
                                        </HStack>
                                        
                                        <SwipeButton newTrade={newTrade} selected={selectedType} />
                                    </>
                                )
                            }
                        </VStack>
                    </Box>
                </Actionsheet.Content>
            </Actionsheet>
      
        <HStack borderTopRadius={25} bg={'#6C38FF'} alignItems="center" position='absolute' bottom='0' left='0' right='0'>
            <Box flex={1} m='4' mr='0' alignItems={'center'}>
                <Pressable onPress={openNo}>
                    <Text py='2' px='12' borderRadius={'2xl'} bg='#FFCACA' fontSize={'17'} fontWeight={'bold'} color={'#333333'}>Buy No</Text>
                </Pressable>
            </Box>
            <Box flex={1} m='4' ml='0' alignItems={'center'}>
                <Pressable onPress={openYes}>
                    <Text py='2' px='12' borderRadius={'2xl'} bg='#A3E9FF' fontSize={'17'} fontWeight={'bold'} color={'#333333'}>Buy Yes</Text>
                </Pressable>
            </Box>
        </HStack>
    </>
    )
}