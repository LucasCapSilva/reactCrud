import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ParagraphComponentStyle';


const ParagraphComponent = ({ text}:any) => {

    return (
      <View>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
     
    );
}

export default ParagraphComponent;