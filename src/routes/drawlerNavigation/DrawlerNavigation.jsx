// In App.js in a new project
import * as React from 'react';
import HomeScreen from '../../pages/home/HomeScreen';
import ProductScreen from '../../pages/products/ProductScreen';
import CategoryScreen from '../../pages/category/CategoryScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer  = createDrawerNavigator();

function DrawlerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Home" component={ProductScreen} />
    <Drawer.Screen name="Home" component={CategoryScreen} />
  </Drawer.Navigator>
  );
}

export default DrawlerNavigation;