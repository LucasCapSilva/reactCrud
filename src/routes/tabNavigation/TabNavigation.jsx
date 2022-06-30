// In App.js in a new project
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import CategoryScreen from '../../pages/category/CategoryScreen';
import HomeScreen from '../../pages/home/HomeScreen';
import ProductScreen from '../../pages/products/ProductScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
        
      }}
     
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons size={30}
            color="#E3371E"
            name="ios-home" />
          )
        }}
      />
      <Tab.Screen name="Cards" component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons size={30}
            color="#E3371E"
            name="card" />
          )
        }}
      />
      <Tab.Screen name="Activity" component={HomeScreen}
      
        options={{
          tabBarIcon: () => (
            <Ionicons size={30} 
            color="#E3371E"
            name="options" />
          )
        }}
      />
        <Tab.Screen name="Settings" component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons size={30}
            color="#E3371E"
            name="settings" />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;