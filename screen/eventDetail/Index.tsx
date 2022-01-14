import { ScrollView, Image, AspectRatio, Box, Text, HStack, Button, Center, Pressable, VStack } from 'native-base';
import * as React from 'react';
import { Chat } from './Chat';
import { TradeDetail } from './TradeDetail';

export const EventDetail = () => {
    const [selected, setSelected] = React.useState(1);
    
    return(
        <>
        <ScrollView
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}
          >
            <AspectRatio w="100%" ratio={390 / 230}>
                <Image
                    source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}
                    alt="Alternate Text"
                />
            </AspectRatio>
            <Box bg='#F6F2FF'>
                <Box px='4' py='3'>
                    <HStack><Text color='#0094FF'>#cricket  </Text><Text color='#0094FF'>#SAvsIND</Text></HStack>
                    <Text my='1' color='#000000'>Will Virat Kohli hit his 71st international century on ongoing tour against SA?</Text>
                    <Text my='2' color='#000000' opacity='0.6'>Total Trades: 3482</Text>
                </Box>
                <HStack>
                    <Pressable bg={selected === 0 ? '': '#FFFFFF'} flex={1} onPress={() => setSelected(0)}>
                        <Box borderTopRightRadius={selected === 0 ?'18':'0'} borderBottomRightRadius={selected === 0 ?'0' :'18'} py='2.5' bg={selected === 0 ?'#FFFFFF': '#F6F2FF'}><Center _text={{color:'black'}}>Trade</Center></Box>
                    </Pressable>
                    <Pressable bg={selected === 1 ? '': '#FFFFFF'} flex={1} onPress={() => setSelected(1)}>
                        <Box borderTopLeftRadius={selected === 1 ?'18':'0'} borderBottomLeftRadius={selected === 1 ? '0' :'18'} py='2.5' bg={selected === 1 ?'#FFFFFF': '#F6F2FF'}><Center _text={{color:'black'}}>Discussion</Center></Box>
                    </Pressable>
                </HStack>
            </Box>
            {/* <Box bg='#FFFFFF'>
                {selected === 0 ? <TradeDetail />:<Chat />}
            </Box> */}
        </ScrollView>
        <Chat />
        </>
    )
}