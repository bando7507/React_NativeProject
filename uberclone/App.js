import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';



export default function App() {

  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerShown: false
            }}
            />
            <Stack.Screen 
            name='MapScreen'
            component={MapScreen}
            options={{
              headerShown: false
            }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
