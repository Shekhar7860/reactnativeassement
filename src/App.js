import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DetailScreen from './screens/DetailScreen';
import { Provider } from "react-redux"
import {store, persistor} from './redux/store/configureStore'
import routeNames from './constants/routeNames';
import { PersistGate } from 'redux-persist/integration/react'
const Stack = createNativeStackNavigator();
const App = () => {
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={routeNames.Home} component={HomeScreen} />
          <Stack.Screen name={routeNames.Welcome} component={WelcomeScreen} />
          <Stack.Screen name={routeNames.Detail} component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
      </Provider>
    )
}

export default App;