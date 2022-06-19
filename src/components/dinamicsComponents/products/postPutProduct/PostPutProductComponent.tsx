
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Product from '../../../../model/Product';
import { findById } from '../../../../service/CategoryService';
import { styles } from './PostPutProductStyle'


const PostPutProductComponent = ({ route, navigation }: any) => {
  const { id } = route.params;

  const [product, setProduct] = useState<Product>({
    id: 0,
    description: "",
    categoria:null
  })

  useEffect(() => {
    getById()
  }, [])

  async function getById() {
    await findById(`/produtos/${id}`, setProduct, {

    })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>PostPutProductComponent</Text>
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

export default PostPutProductComponent;