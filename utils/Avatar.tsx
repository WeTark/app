import { Box, Center, Text } from 'native-base';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { Image, StyleSheet } from 'react-native';

interface IAvatarProps{
    imageUrl?: string,
    name?: string,
    borderColor?: string,
    width: number
}
export const Avatar = (props: IAvatarProps) => {
    const {imageUrl, width, name, borderColor} = props;
    const styles = StyleSheet.create({
        image: {
            width: width,
            height: width,
            borderRadius: 150 / 2,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: borderColor?borderColor:"#C4C4C4",
            backgroundColor: "#C4C4C4"
        },
      });

    return(
        <>
        {
            imageUrl?(
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUrl,
                    }}
                />
            ):(

                <Box
                style={styles.image}
                >
                    <Center flex={1}><Text>{name}</Text></Center>
                </Box>
            )
        }
        </>
    )
}