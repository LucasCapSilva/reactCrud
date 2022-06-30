import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './FormComponentStyle';



const FormComponent = ({ inputsComponents, buttonsComponents, buttonSendComponent }: any) => {

  const [inputs, setInputs] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [buttonSend, setButtonSend] = useState([]);

  useEffect(() => {
    setInputs(inputsComponents)
    setButtons(buttonsComponents)
    setButtonSend(buttonSendComponent)
  }, [])

  

  return (

    <View>

      <FlatList
        data={inputs}
        renderItem={(input) => {
          return (
            input.item.input
          )
        }}
      />
      <View style={styles.container}>
        {
          buttons.map((button: any, i) => {
            return (
              <View key={i} style={styles.containerItem}>
                {button.button}
              </View>
            )
          })
        }


      </View>
      {buttonSend}
    </View>

  );
}

export default FormComponent;