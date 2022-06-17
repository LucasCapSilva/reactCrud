
import { Text, View } from 'react-native';
import {styles} from './HomeStyle'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeComponent</Text>  
    </View>
  );
}