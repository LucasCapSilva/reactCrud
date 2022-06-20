
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { findAll } from '../../../../service/ProductService';
import { styles } from './GetAllProductStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Product from '../../../../model/Product';


const GetAllProductComponent = ({ navigation }: any) => {

  const [products, setProducts] = useState<Product[]>([])


  useEffect(() => {
    getAll()
  })     
        
  async function getAll() {
    await findAll("/produtos", setProducts, {

    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GetAllProductComponent</Text>
      <TouchableOpacity style={styles.buttonRegister}
        onPress={() => navigation.navigate('PostPutProduct',{
          id:0
      })}>
          <Text style={styles.buttonText}>Register new Product </Text>
        
        </TouchableOpacity>
      <FlatList
        data={products}
        renderItem={(product) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardItem}>
                <Text style={styles.textItem}>{product.item.id} </Text>
                <Text style={styles.textItem}>{product.item.description}</Text>
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
                <Text style={styles.textItem}>{product.item.categoria?.description}</Text>
              </View>
              <View style={styles.cardItem}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="delete-outline" size={70} color="#DC3545" 
                  onPress={() => navigation.navigate('DeleteProduct',{
                    id:product.item.id
                })}/>
                </TouchableOpacity>
                <TouchableOpacity >
                  <MaterialCommunityIcons name="square-edit-outline" size={70} color="#62A2C8"
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