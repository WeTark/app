import { Box, HStack, VStack, Text, Pressable, Center} from "native-base"
import { PurpleLogo } from "../../../assets/purpleLogo"
import { LeaderBoardIcon } from '../../../assets/leaderboardIcon';
import { HowtotradeIcon } from "../../../assets/howtotradeIcon";
import { SuggestaneventIcon } from "../../../assets/suggestaneventIcon";
import { HelpNSupport } from '../../../assets/helpNSupport';
import { TermsNConditionsIcon } from '../../../assets/terms&ConditionsIcon';
import { TelegramIcon } from "../../../assets/telegramIcon";
import { InstagramIcon } from "../../../assets/instagramIcon";
import { TwitterIcon } from "../../../assets/twitterIcon";
import { LinkedinIcon } from "../../../assets/linkedinIcon";
import { PeoplesIcon } from "../../../assets/peoplesIcon";

export const More = () => {
    return(
        <>
            <Box bg='#F0EBFF' borderBottomRadius={'30'}>
                <VStack mt='20' mb='10' mx='5' >
                    <PurpleLogo />
                    <Pressable mt='10'>
                        <HStack>
                            <LeaderBoardIcon/>
                            <Text ml='3'>Leaderboard</Text>
                        </HStack>
                    </Pressable>
                    <Pressable mt='5'>
                        <HStack>
                            <HowtotradeIcon/>
                            <Text ml='3'>How to trade</Text>
                        </HStack>
                    </Pressable>
                    <Pressable mt='5'>
                        <HStack>
                            <SuggestaneventIcon />
                            <Text ml='3'>Suggest an event</Text>
                        </HStack>
                    </Pressable>
                    <Pressable mt='5'>
                        <HStack>
                            <TermsNConditionsIcon/>
                            <Text ml='3'>Terms & Conditions</Text>
                        </HStack>
                    </Pressable>
                    <Pressable mt='5'>
                        <HStack>
                            <HelpNSupport/>
                            <Text ml='3'>Help & Support</Text>
                        </HStack>
                    </Pressable>
                </VStack>
            </Box>
            <VStack mx='5' mt='5'>
                <Text>Follow us on...</Text>
                <HStack space={'4'} mt='2' mb='8'><TelegramIcon/><InstagramIcon/><TwitterIcon/><LinkedinIcon/></HStack>

                <Center>
                    <Pressable  bg='#F0EBFF' p='3' borderRadius={'5'}>
                     <HStack><PeoplesIcon/><Text ml='2' fontWeight={'bold'}>Refer and earn</Text></HStack>
                    </Pressable>
                </Center>
            </VStack>
        </>
    )
}