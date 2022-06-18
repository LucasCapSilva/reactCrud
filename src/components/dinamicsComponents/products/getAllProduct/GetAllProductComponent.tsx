
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Category from '../../../../model/Category';
import { findAll } from '../../../../service/ProductService';
import { styles } from './GetAllProductStyle'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Product from '../../../../model/Product';
export default function GetAllProductComponent() {

  const [products, setProducts] = useState<Product[]>([])


  useEffect(() => {
    getAll()
  }, [products.length])

  async function getAll() {
    await findAll("/produtos", setProducts, {

    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GetAllProductComponent</Text>
      <ScrollView >
        {
          products.map(product => (

            <View style={styles.card}>
              <View style={styles.cardItem}>
                <Text style={styles.textItem}>{product.id}</Text>
                <Text style={styles.textItem}>  {product.description}</Text>
              </View>
              <View style={styles.cardItem}>
              <TouchableOpacity style={styles.buttonItem}>
              <AntDesign name="delete"  size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonItem}>
              <FontAwesome5 name="edit" size={28} color="black" />
              </TouchableOpacity>
              </View>
            </View>

          ))
        }

      </ScrollView>
    </View>

  );
}