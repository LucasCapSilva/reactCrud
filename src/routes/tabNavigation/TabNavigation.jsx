// In App.js in a new project
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import CategoryScreen from '../../pages/category/CategoryScreen';
import HomeScreen from '../../pages/home/HomeScreen';
import ProductScreen from '../../pages/products/ProductScreen';
;


const Tab  = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: true
    }}
    initialRouteName="Home"
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Product" component={ProductScreen} />
    <Tab.Screen name="Category" component={CategoryScreen} />
  </Tab.Navigator>
  );
}

export default TabNavigation;