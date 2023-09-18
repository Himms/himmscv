import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Edit from './screens/Edit';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen  name="Edit" component={Edit} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


