import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '../constants/colors';
import DetailsScreen from '../screens/DetailsScreen';
import BottomNavigator from '../screens/BottomNavigator';
import OnBoardScreen from '../screens/OnBoardScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" screenOptions={{headerShown: true}} component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" screenOptions={{headerShown: false}} component={DetailsScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
