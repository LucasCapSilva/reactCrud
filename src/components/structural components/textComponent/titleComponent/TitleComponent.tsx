import { Text, View } from 'react-native';
import { styles } from './TitleComponentStyle';


const TitleComponent = ({ text}:any) => {

    return (
      <View>
        <Text style={styles.title}>{text}</Text>
      </View>
     
    );
}

export default TitleComponent;