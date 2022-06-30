import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ButtonComponentStyle';


const ButtonComponent = ({ handleClick ,title, styleVariant  }) => {

    const [styleValue, setStyleValue] = useState();
    const [textStyle, setTextStyle] = useState();

    useEffect(() => {

        if (styleVariant == "default") {
            setStyleValue(styles.default)
            setTextStyle(styles.buttonText)
        }else if(styleVariant == "none") {
            setStyleValue(styles.none);
            setTextStyle(styles.buttonTextNoDecorator)
        }else if(styleVariant == "sucess") {
            setStyleValue(styles.sucess);
            setTextStyle(styles.buttonText)
        }else if(styleVariant == "danger"){
            setStyleValue(styles.danger);
            setTextStyle(styles.buttonText)
        }else if(styleVariant == "info"){
            setStyleValue(styles.info);
            setTextStyle(styles.buttonText)
        }else if(styleVariant == "secondary"){
            setStyleValue(styles.secondary);
            setTextStyle(styles.buttonText)
        }else if(styleVariant == "warning"){
            setStyleValue(styles.warning);
            setTextStyle(styles.buttonText)
        }
       
        },[])  



    return (
       
        <TouchableOpacity style={styleValue} onPress={handleClick}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
     
    );
}

export default ButtonComponent;