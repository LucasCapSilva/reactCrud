
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Category from '../../../../model/Category';
import { deleteById, findById } from '../../../../service/CategoryService';
import { styles } from './DeleteCategoryStyle'


const DeleteCategoryComponent = ({ route, navigation }: any) => {
  var id  = route.params.id;

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

  async function deleteCategory() {
    await deleteById(`/categoria/${id}`, {

    })
    await alert('Category deleted with success');
    await navigation.navigate('GetAllCategory');
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
          <TouchableOpacity style={styles.buttonSend} onPress={() => deleteCategory()}>
            <MaterialCommunityIcons name="delete-outline" size={20} color="white"/>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('GetAllCategory')}>
            <MaterialCommunityIcons name="delete-outline" size={20} color="white"/>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default DeleteCategoryComponent;