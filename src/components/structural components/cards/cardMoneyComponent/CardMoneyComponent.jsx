import { Text, View } from 'react-native';
import { styles } from './CardMoneyComponentStyle';
import { AntDesign } from '@expo/vector-icons';

const CardMoneyComponent = ({ value }) => {

  return (
    <View style={styles.flexContainerCard}>
      <View style={styles.containerCard}>
        <View style={styles.flexContainerCard}>
          <AntDesign name="arrowup" size={30} color='#025159' />
          <View>
            <Text style={styles.paragraph}>Expence</Text>
            <Text style={styles.title}>${value}</Text>
          </View>

        </View>
      </View>

      <View style={styles.containerCardDanger}>
        <View style={styles.flexContainerCard}>
          <AntDesign name="arrowdown" size={30} color='#025159' />
          <View>
            <Text style={styles.paragraph}>Expence</Text>
            <Text style={styles.title}>${value}</Text>
          </View>

        </View>
      </View>

    </View>


  );
}

export default CardMoneyComponent;