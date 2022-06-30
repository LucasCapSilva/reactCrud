// In App.js in a new project
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../pages/home/HomeScreen';
import ProductScreen from '../../pages/products/ProductScreen';
import CategoryScreen from '../../pages/category/CategoryScreen';
import GetAllProductComponent from '../../components/dinamicsComponents/products/getAllProduct/GetAllProductComponent';
import PostPutProductComponent from '../../components/dinamicsComponents/products/postPutProduct/PostPutProductComponent';
import DeleteProductComponent from '../../components/dinamicsComponents/products/deleteProduct/DeleteProductComponent';
import GetAllCategoryComponent from '../../components/dinamicsComponents/categorys/getAllCategory/GetAllCategoryComponent';
import PostPutCategoryComponent from '../../components/dinamicsComponents/categorys/postPutCategory/PostPutCategoryComponent';
import DeleteCategoryComponent from '../../components/dinamicsComponents/categorys/deleteCategory/DeleteCategoryComponent';
import LoginScreen from '../../pages/login/LoginScreen';
import RegisterScreen from '../../pages/register/RegisterScreen';
import TabNavigation from '../tabNavigation/TabNavigation';


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
      <Stack.Navigator  
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login"
      >
      

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen  name="Home"   component={TabNavigation} />

      </Stack.Navigator>
  );
}

export default StackNavigation;