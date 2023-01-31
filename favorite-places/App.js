import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';
import IconButton from './components/UI/IconButton';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';
import { GlobalColors } from './constants/colors';
import Map from './screens/Map';
import { init } from './util/database';
import PlaceDetails from './screens/PlaceDetails';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch(err => console.log(err));
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (dbInitialized) {
      await SplashScreen.hideAsync();
    }
  }, [dbInitialized]);

  if (!dbInitialized) return null;

  return (
    <>
      <StatusBar />
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalColors.primary500,
            },
            headerTintColor: GlobalColors.gray700,
            contentStyle: { backgroundColor: GlobalColors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: 'Add a new Place',
            }}
          />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              title: 'Loading Place...',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
