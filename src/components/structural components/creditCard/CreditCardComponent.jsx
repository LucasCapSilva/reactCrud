import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { styles } from './CreditCardComponentStyle';
import { Fontisto } from '@expo/vector-icons';

const CreditCardComponent = ({ bankStatement, numberCard, nameCard }) => {

  return (
    <View style={styles.containerCard}>

      <View style={styles.flexContainerCard}>
        <Text style={styles.title}>{bankStatement}</Text>
        <Ionicons size={50}
          color= '#A8B5BF'
          name="wifi" />
      </View>
      <View style={styles.flexContainerCard}>
        <Text style={styles.SubTitle}>{numberCard}</Text>
      </View>
      <View style={styles.flexContainerCard}>
        <Text style={styles.paragraph}>{nameCard}</Text>
        <View >
          <Fontisto name="visa" size={40} color= '#F2C879' />
        </View>
      </View>
    </View>

  );
}

export default CreditCardComponent;