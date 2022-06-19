
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Category from '../../../../model/Category';
import { findById } from '../../../../service/CategoryService';
import { styles } from './DeleteCategoryStyle'


const DeleteCategoryComponent = ({ route, navigation }: any) => {
  const { id } = route.params;

  const [category, setCategory] = useState<Category>({
    id: 0,
    description: ""
  })

  useEffect(() => {
    getById()
  }, [])

  async function getById() {
    await findById(`/categoria/${id}`, setCategory, {

    })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>DeleteCategoryComponent</Text>
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <Text style={styles.textItem}>{category.id} </Text>
          <Text style={styles.textItem}>{category.description}</Text>
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
            <MaterialCommunityIcons name="delete-outline" size={70} color="red" />
          </TouchableOpacity>
          <TouchableOpacity >
            <MaterialCommunityIcons name="square-edit-outline" size={70} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default DeleteCategoryComponent;