
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Category from '../../../../model/Category';
import { findAll } from '../../../../service/CategoryService';
import { styles } from './GetAllCategoryStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface GetAllCategoryProps {
  navigation: any;
}

const GetAllCategoryComponent = ({ navigation }: GetAllCategoryProps) => {

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
      <Text style={styles.title}>GetAllCategoryComponent</Text>
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
                  <MaterialCommunityIcons name="delete-outline" size={70} color="red" 
                  onPress={() => navigation.navigate('DeleteCategory',{
                    id:category.item.id
                })}/>
                </TouchableOpacity>
                <TouchableOpacity >
                  <MaterialCommunityIcons name="square-edit-outline" size={70} color="blue"
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