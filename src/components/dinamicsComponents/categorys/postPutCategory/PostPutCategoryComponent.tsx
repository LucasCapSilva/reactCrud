

import { useEffect, useState } from 'react';
import {  Text, TextInput, TouchableOpacity, View } from 'react-native';
import Category from '../../../../model/Category';
import { findById, post, put } from '../../../../service/CategoryService';
import { styles } from './PostPutCategoryStyle'
import { Feather } from '@expo/vector-icons';


const PostPutCategoryComponent = ({ route, navigation }: any ) => {

  const [category, setCategory] = useState<Category>({
    id: 0,
    description: ''
  })


  useEffect(() => { 
      if (route.params.id != 0) {
      getById()  
      }
  }, [])

  async function getById() {
    await findById(`/categoria/${route.params.id}`, setCategory, {

    })
  }



async function onSubmit() {
  if (route.params.id != 0) {
    await put(`/categoria`,category, setCategory, {

    })
    await alert('Category updated with success');
    back()
  } else {
    await post(`/categoria`,category, setCategory, {
    
    })
    alert('Category created with success');
    back()
  }
 

}

function back() {
  navigation.navigate('GetAllCategory');


}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>PostPutCategoryComponent</Text>
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <Text style={styles.textItem}>Description</Text>

        </View>
        <View style={styles.cardItem}>
          <TextInput
            placeholder="Description"
            value={category.description}
            style={styles.input}
            onChangeText={(text) => setCategory({ ...category, description: text })}
          />
        </View>
        <TouchableOpacity style={styles.buttonSend}
        onPress={() => onSubmit()}>
        
          <Text style={styles.buttonText}>Send </Text>
          <Feather name="send" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      
      </View>
    </View>
  );
}

export default PostPutCategoryComponent;