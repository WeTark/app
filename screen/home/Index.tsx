import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
  ScrollView,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { IFont } from 'native-base/lib/typescript/theme/base/typography';
import { Entypo } from '@expo/vector-icons'; 
import { EventDetail } from '../eventDetail/Index';
import { Home } from './Home';

export const HomeIndex = ({route, navigation }) => {
  const [selected, setSelected] = React.useState(0);
  const menuOptions: Array<{name: string, icon: string}> = [
    {
      name: 'Home',
      icon: 'home'
    },
    {
      name: 'Portfolio',
      icon: 'suitcase'
    },
    {
      name: 'Wallet',
      icon: 'wallet'
    },
    {
      name: 'More',
      icon: 'list'
    },
  ]

  return (
      <Box flex={1} bg='#FFFFFF' safeAreaTop>
        <Box flex={1}>
          {
            {
              0: <Home navigation={navigation}/>,
              1: <></>,
              2: <></>,
              3: <></>
            }[selected]
          }
        </Box>
        <HStack bg={'rgba(255, 255, 255, 0.8)'} alignItems="center" position='absolute' bottom='0' left='0' right='0'>
          {
            menuOptions.map((option, key)=>(
              <Pressable
                opacity={selected === key ? 1 : 0.6}
                py="3"
                flex={1}
                key={key}
                onPress={() => setSelected(key)}>

                <Center>
                  <Center bg={selected === key ? "#6C38FF": "#FFFFFF"} h="55" w="55" borderRadius="12">
                    <Icon
                      as={
                        <Entypo name={option.icon as any} />
                      }
                      color={selected === key ? "#FFFFFF": "#000000"}
                      size="5"
                    />
                    <Text color={selected === key ? "#FFFFFF": "#000000"} fontSize="10">
                      {option.name}
                    </Text>
                  </Center>
                </Center>
              </Pressable>
            ))
          }

        </HStack>
      </Box>
  );
}