import React, { useEffect } from 'react';
import {View, Text, LogBox} from 'react-native';
import AppNavigator from './src/navigation/appNavigator';
import { Provider } from 'react-redux';
import { Root } from "native-base";
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/navigationService';

const App = () => {
  useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
      <Root>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <AppNavigator />
          </NavigationContainer>
        </Provider>
      </Root>
  );
};

export default App;
