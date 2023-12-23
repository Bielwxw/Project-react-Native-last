import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './src/pages/login';
import MpApp from './src/pages/Mp-app';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Log In">
          <Stack.Screen name="Log In" component={Login}/>
          <Stack.Screen name="Aplicativo" component={MpApp}/>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  )
}