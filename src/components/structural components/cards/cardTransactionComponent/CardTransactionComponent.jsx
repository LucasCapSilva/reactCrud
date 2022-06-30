import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { styles } from './CardTransactionComponentStyle';

const CardTransactionComponent = ({name ,value }) => {

  return (
    <View style={styles.flexContainerCard}>
      <View style={styles.containerCard}>
        <View style={styles.flexContainerCard}>

          <View style={styles.flexContainerCard}>
          <MaterialIcons name="attach-money" size={50} color="#025159" />
          
            <View>
              <Text style={styles.paragraph}>Expence</Text>
              <Text style={styles.title}>{name}</Text>
            </View>

          </View >

          
          <View style={styles.flexContainerItem}>
          <Text style={styles.SubTitle}>- ${value}</Text>
          </View>

        </View>
      </View>



    </View>


  );
}

export default CardTransactionComponent;