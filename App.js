import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/LoginScreen'; // Only keep the LoginScreen
import Profile from './src/screen/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Login Page" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ title: 'Profile' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
