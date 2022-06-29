import { Text, View } from 'react-native';
import { styles } from './SubTitleComponentStyle';


const SubTitleComponent = ({ text}:any) => {

    return (
      <View>
        <Text style={styles.SubTitle}>{text}</Text>
      </View>
     
    );
}

export default SubTitleComponent;