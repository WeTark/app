import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({route, navigation }) => {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}