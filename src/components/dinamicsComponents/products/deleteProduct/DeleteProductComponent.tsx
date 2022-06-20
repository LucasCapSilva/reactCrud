
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Product from '../../../../model/Product';
import { deleteById, findById } from '../../../../service/ProductService';
import { styles } from './DeleteProductStyle'


const DeleteProductComponent = ({ route, navigation }: any) => {

  const [product, setProduct] = useState<Product>({
    id: 0,
    description: "",
    categoria:null
  })

  useEffect(() => {
    getById()
  }, [])

  async function getById() {
    await findById(`/produtos/${route.params.id}`, setProduct, {

    })
  }

  async function deleteProduct() {
    await deleteById(`/produtos/${route.params.id}`, {

    })
    await alert('Product deleted with success');
    await navigation.navigate('GetAllProduct');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>DeleteProductComponent</Text>
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <Text style={styles.textItem}>{product.id} </Text>
          <Text style={styles.textItem}>{product.description}</Text>
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
          <Text style={styles.textItem}>{product.categoria?.description}</Text>
        </View>
        <View style={styles.cardItem}>
          <TouchableOpacity style={styles.buttonSend} onPress={() => deleteProduct()}>
            <MaterialCommunityIcons name="delete-outline" size={20} color="#FFFFFF"/>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('GetAllProduct')}>
            <MaterialCommunityIcons name="delete-outline" size={20} color="#FFFFFF"/>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default DeleteProductComponent;