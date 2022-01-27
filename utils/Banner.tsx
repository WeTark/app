import { Box, Center, Text } from 'native-base';
import { Image } from 'react-native';

interface IBanner{
    imageUrl: string,
    title: string
}

export const Banner = (props: IBanner) => {
    const { imageUrl, title } = props;
    return(
        <>
            {
                imageUrl?(
                    <Image
                        source={{
                            uri: imageUrl,
                        }}
                        style={{ height: 170}}
                    />
                ):(
                    <Box style={{ height: 170}} bg={'#C4C4C4'}>
                        <Center flex={1}><Text fontSize={20} fontWeight={'bold'}>#{title}</Text></Center>
                    </Box>
                )
            }
        </>
    )
}