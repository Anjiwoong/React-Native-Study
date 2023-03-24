import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Detail from './screens/Detail';
import Test from './screens/Test';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 300);
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="detail" component={Detail} />
          <Stack.Screen name="test" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
