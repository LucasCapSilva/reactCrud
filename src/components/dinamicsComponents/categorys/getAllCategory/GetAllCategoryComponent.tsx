
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Category from '../../../../model/Category';
import { findAll } from '../../../../service/CategoryService';
import { styles } from './GetAllCategoryStyle'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
export default function GetAllCategoryComponent() {

  const [categorys, setCategorys] = useState<Category[]>([])


  useEffect(() => {
    getAll()
  }, [categorys.length])

  async function getAll() {
    await findAll("/categoria", setCategorys, {

    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CategoryComponent</Text>
      <ScrollView >
        {
          categorys.map(category => (

            <View style={styles.card}>
              <View style={styles.cardItem}>
                <Text style={styles.textItem}>{category.id}</Text>
                <Text style={styles.textItem}>  {category.description}</Text>
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