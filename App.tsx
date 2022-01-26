import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { configureAppStore } from './store/configureAppStore';
import { Provider } from 'react-redux';
import IndexApp from './IndexApp';
import { Center, NativeBaseProvider, View } from 'native-base';

const Stack = createNativeStackNavigator();
const store = configureAppStore();
export type RootState = ReturnType<typeof store.getState>;

function App() {
  
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Center flex={1} bg={'#f2f2f2'}>
          <View width={'100%'} flex={1} style={{maxWidth: '420px'}}>
            <IndexApp />
          </View>
        </Center>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;