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


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
      <Stack.Navigator  
      screenOptions={{
        headerShown: true
      }}
      initialRouteName="GetAllProduct"
      >
        <Stack.Screen  name="Home"   component={HomeScreen} />

        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="GetAllProduct" component={GetAllProductComponent} />
        <Stack.Screen name="PostPutProduct" component={PostPutProductComponent} />
        <Stack.Screen name="DeleteProduct" component={DeleteProductComponent} />


        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="GetAllCategory" component={GetAllCategoryComponent} />
        <Stack.Screen name="PostPutCategory" component={PostPutCategoryComponent} />
        <Stack.Screen name="DeleteCategory" component={DeleteCategoryComponent} />
      </Stack.Navigator>
  );
}

export default StackNavigation;