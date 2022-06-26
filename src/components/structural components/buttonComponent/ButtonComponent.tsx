import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ButtonComponentStyle';


const ButtonComponent = ({ handleClick,variation ,title , logo }: any) => {





    return (
       
        <TouchableOpacity style={styles.sucess} onPress={handleClick}>
            <MaterialCommunityIcons name={logo} size={20} color="white" />
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
     
    );
}

export default ButtonComponent;