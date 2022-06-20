import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { findById, post, put } from '../../../../service/ProductService';
import { styles } from './PostPutProductStyle'
import { Feather } from '@expo/vector-icons';
import Product from '../../../../model/Product';


const PostPutProductComponent = ({ route, navigation }) => {

  const [product, setProduct] = useState({
    id: 0,
    description: ''
  })
 

  useEffect(() => {
    if (route.params.id != 0) {
      getById()
    }
  }, [])

  async function getById() {
    await findById(`/produtos/${route.params.id}`, setProduct, {

    })
  }



  async function onSubmit() {
    if (route.params.id != 0) {
      await put(`/produtos`, product, setProduct, {

      })
      await alert('Product updated with success');
      back()
    } else {
      await post(`/produtos`, product, setProduct, {

      })
      alert('Product created with success');
      back()
    }


  }

  function back() {
    navigation.navigate('GetAllProduct');


  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>PostPutProductComponent</Text>
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <Text style={styles.textItem}>Description</Text>

        </View>
        <View style={styles.cardItem}>
          <TextInput
            placeholder="Description"
            value={product.description}
            style={styles.input}
            onChangeText={(text) => setProduct({ ...product, description: text })}
          />
        </View>
        <View style={styles.cardItem}>
      

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

export default PostPutProductComponent;