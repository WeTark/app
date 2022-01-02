import React from "react"
import { VStack, Center, Heading, NativeBaseProvider, Divider, Image } from "native-base"
import { HorizontalImageStackTop } from "./HorizontalImageStackTop"
import { HorizontalTitleStack } from "./HorizontalTitleStack"




export function Example() {
  return (
    <VStack space={4} alignItems="center">
      <HorizontalImageStackTop/>
      <Divider/>
      <HorizontalTitleStack/>
      <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
    </VStack>
  )
}

export const VerticalContainerStack = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
