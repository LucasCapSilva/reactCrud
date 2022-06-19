
import { Text, View } from 'react-native';
import {styles} from './HomeStyle'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeComponent</Text>  
    </View>
  );
}

export default HomeScreen;