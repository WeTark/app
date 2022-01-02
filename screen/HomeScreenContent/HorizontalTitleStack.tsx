import React from "react"
import { HStack, Stack, Center, Heading, NativeBaseProvider, Image } from "native-base"

export function Example() {

    var titleList = [
        {key: 1, title: 'Trending'},
        {key: 2, title: 'Trending'},
        {key: 3, title: 'Trending'},
        {key: 4, title: 'Trending'},
    ]
    return (
        <Stack space={3} alignItems="center">
        <HStack space={3} alignItems="center">
            {titleList.map((title)=>{
                return (<p key={title.key}>{title.title}</p>);
            })}
        </HStack>
        </Stack>
    )
}

export const HorizontalTitleStack = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
