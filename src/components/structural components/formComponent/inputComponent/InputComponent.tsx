import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './InputComponentStyle';


const InputComponent = ({ title, type }: any) => {

    const [secure, setSecure] = useState(false);
    const [typeKeyboard, setypeKeyboard] = useState('default');

    useEffect(() => {
        if (type === 'password') {
            setSecure(true);
            setypeKeyboard('default');
        } else if (type === 'email') {
            setypeKeyboard('email-address');
            setSecure(false)
        } else if (type === 'text') {
            setypeKeyboard('default');
            setSecure(false)
        }else if (type === 'numeric') {
            setypeKeyboard('numeric');
            setSecure(false)
        }else if (type === 'numericPassword') {
            setypeKeyboard('numeric');
            setSecure(true)
        }else if (type === 'phone-pad') {
            setypeKeyboard('phone-pad');
            setSecure(true)
        }else if (type === 'decimal-pad') {
            setypeKeyboard('decimal-pad');
            setSecure(true)
        }else if (type === 'url') {
            setypeKeyboard('url');
            setSecure(true)
        }
        
    })

    return (

        <View style={styles.containerFlex}>
            <View style={styles.containerText}>
                <Text style={styles.title}>{title}</Text>
            </View>
                <TextInput
                    keyboardType={typeKeyboard}
                    secureTextEntry={secure}
                    placeholder={title}
                    style={styles.input}
                />
           
        </View>

    );
}

export default InputComponent;