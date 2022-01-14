import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { configureAppStore } from './store/configureAppStore';
import { Provider } from 'react-redux';
import IndexApp from './IndexApp';
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();
const store = configureAppStore();
export type RootState = ReturnType<typeof store.getState>;

function App() {
  
  return (
    <Provider store={store}>
      <NativeBaseProvider>
       <IndexApp />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;