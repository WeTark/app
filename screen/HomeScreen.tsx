import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { VerticalContainerStack } from './HomeScreenContent/VerticalContainerStack';

export const HomeScreen = ({route, navigation }) => {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <VerticalContainerStack/>
    </View>
  );
}