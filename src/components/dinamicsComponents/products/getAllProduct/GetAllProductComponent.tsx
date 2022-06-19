
import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { findAll } from '../../../../service/ProductService';
import { styles } from './GetAllProductStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Product from '../../../../model/Product';


interface GetAllProductProps {
  navigation: any;
}

const GetAllProductComponent = ({ navigation }: GetAllProductProps) => {

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

      <FlatList
        data={products}
        renderItem={(product) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardItem}>
                <Text style={styles.textItem}>{product.item.id}</Text>
                <Text style={styles.textItem}>  {product.item.description}</Text>
              </View>
              <View style={styles.cardItem}>
                <Text style={styles.textItem}> {product.item.categoria?.description}</Text>
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
                   onPress={() => navigation.navigate('DeleteProduct',{
                    id:product.item.id
                })}/>
                </TouchableOpacity>
                <TouchableOpacity >
                  <MaterialCommunityIcons name="square-edit-outline" size={70} color="blue" 
                    onPress={() => navigation.navigate('PostPutProduct',{
                      id:product.item.id
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

export default GetAllProductComponent;