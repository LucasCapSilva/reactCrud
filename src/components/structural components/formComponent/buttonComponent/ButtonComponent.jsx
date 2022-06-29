import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ButtonComponentStyle';


const ButtonComponent = ({ handleClick ,title  }) => {





    return (
       
        <TouchableOpacity style={styles.default} onPress={handleClick}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
     
    );
}

export default ButtonComponent;