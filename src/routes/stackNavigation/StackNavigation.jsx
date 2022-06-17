// In App.js in a new project
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../pages/home/HomeScreen';
import ProductScreen from '../../pages/products/ProductScreen';
import CategoryScreen from '../../pages/category/CategoryScreen';


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
      <Stack.Navigator  
      screenOptions={{
        headerShown: true
      }}
      initialRouteName="Home"
      >
        <Stack.Screen  name="Home"   component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
  );
}

export default StackNavigation;