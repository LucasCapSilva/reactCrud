
import { Text, View } from 'react-native';
import {styles} from './ProductStyle'

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductComponent</Text>  
    </View>
  );
}

export default ProductScreen;