import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import IconButton from './components/UI/IconButton';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';
import { GlobalColors } from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
