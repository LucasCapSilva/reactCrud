import { Text, View } from 'react-native';
import { styles } from './CardNameComponentStyle';
import { AntDesign } from '@expo/vector-icons';

const CardNameComponent = ({ name }) => {

  return (
    <View >

      <View style={styles.containerCard}>
        <View style={styles.flexContainerCard}>
          
          <View>
            <Text style={styles.title}>Hello {name}</Text>
          </View>
          <AntDesign name="user" size={30} color='#025159' />
        </View>
      </View>

    </View>


  );
}

export default CardNameComponent;