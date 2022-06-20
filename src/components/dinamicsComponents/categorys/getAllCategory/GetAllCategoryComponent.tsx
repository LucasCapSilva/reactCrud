
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Category from '../../../../model/Category';
import { findAll } from '../../../../service/CategoryService';
import { styles } from './GetAllCategoryStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons';



const GetAllCategoryComponent = ({ navigation }: any) => {

  const [categorys, setCategorys] = useState<Category[]>([])


  useEffect(() => {
    getAll()
  })     
        
  async function getAll() {
    await findAll("/categoria", setCategorys, {

    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GetAllCategoryComponent</Text>
      <TouchableOpacity style={styles.buttonRegister}
        onPress={() => navigation.navigate('PostPutCategory',{
          id:0
      })}>
          <Text style={styles.buttonText}>Register new category </Text>
        
        </TouchableOpacity>
      <FlatList
        data={categorys}
        renderItem={(category) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardItem}>
                <Text style={styles.textItem}>{category.item.id}</Text>
                <Text style={styles.textItem}>  {category.item.description}</Text>
              </View>
              <View style={styles.cardItem}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
              </View>
              <View style={styles.cardItem}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="delete-outline" size={70} color="#DC3545" 
                  onPress={() => navigation.navigate('DeleteCategory',{
                    id:category.item.id
                })}/>
                </TouchableOpacity>
                <TouchableOpacity >
                  <MaterialCommunityIcons name="square-edit-outline" size={70} color="#62A2C8"
                   onPress={() => navigation.navigate('PostPutCategory',{
                    id:category.item.id
                })}/>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>

  );
}

export default GetAllCategoryComponent;