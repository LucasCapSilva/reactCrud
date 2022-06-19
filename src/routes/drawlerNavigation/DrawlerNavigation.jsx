// In App.js in a new project
import * as React from 'react';
import HomeScreen from '../../pages/home/HomeScreen';
import ProductScreen from '../../pages/products/ProductScreen';
import CategoryScreen from '../../pages/category/CategoryScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GetAllProductComponent from '../../components/dinamicsComponents/products/getAllProduct/GetAllProductComponent';
import PostPutProductComponent from '../../components/dinamicsComponents/products/postPutProduct/PostPutProductComponent';
import DeleteProductComponent from '../../components/dinamicsComponents/products/deleteProduct/DeleteProductComponent';
import GetAllCategoryComponent from '../../components/dinamicsComponents/categorys/getAllCategory/GetAllCategoryComponent';
import PostPutCategoryComponent from '../../components/dinamicsComponents/categorys/postPutCategory/PostPutCategoryComponent';
import DeleteCategoryComponent from '../../components/dinamicsComponents/categorys/deleteCategory/DeleteCategoryComponent';


const Drawer  = createDrawerNavigator();

function DrawlerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">

    <Drawer.Screen name="Home" component={HomeScreen} />

    <Drawer.Screen name="Product" component={ProductScreen} />
    <Drawer.Screen name="GetAllProduct" component={GetAllProductComponent} />
    <Drawer.Screen name="PostPutProduct" component={PostPutProductComponent} />
    <Drawer.Screen name="DeleteProduct" component={DeleteProductComponent} />

    <Drawer.Screen name="Category" component={CategoryScreen} />
    <Drawer.Screen name="GetAllCategory" component={GetAllCategoryComponent} />
    <Drawer.Screen name="PostPutCategory" component={PostPutCategoryComponent} />
    <Drawer.Screen name="DeleteCategory" component={DeleteCategoryComponent} />
  </Drawer.Navigator>
  );
}

export default DrawlerNavigation;