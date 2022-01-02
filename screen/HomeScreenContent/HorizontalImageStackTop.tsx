import React from "react"
import { HStack, Stack, Center, Heading, NativeBaseProvider, Image } from "native-base"

export function Example() {

    var imgList = [
        {key: 1, url: "https://wallpaperaccess.com/full/317501.jpg"},
        {key: 2, url: "https://wallpaperaccess.com/full/317501.jpg"},
        {key: 3, url: "https://wallpaperaccess.com/full/317501.jpg"},
        {key: 4, url: "https://wallpaperaccess.com/full/317501.jpg"},
    ]
    return (
        <Stack space={3} alignItems="center">
        <HStack space={3} alignItems="center">
            {imgList.map((img)=>{
                return (<Image
                    key={img.key}
                    size={100}
                    resizeMode={"contain"}
                    borderRadius={50}
                    source={{
                        uri: img.url,
                    }}
                    alt="Alternate Text"
                />);
            })}
        </HStack>
        </Stack>
    )
}

export const HorizontalImageStackTop = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
