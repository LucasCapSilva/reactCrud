
import { Text, View } from 'react-native';
import {styles} from './ProductStyle'

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductComponent</Text>  
    </View>
  );
}