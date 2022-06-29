import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './FormComponentStyle';



const FormComponent = ({ inputsComponents, buttonsComponents, buttonSendComponent }: any) => {

  const [inputs, setInputs] = useState(inputsComponents);
  const [buttons, setButtons] = useState(buttonsComponents);
  const [buttonSend, setButtonSend] = useState(buttonSendComponent);

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
        <FlatList
          data={buttons}
          renderItem={(button) => {
            return (
              <View style={styles.containerItem}>
                {button.item.button}
              </View>
            )
          }}
        />

      </View>
      {buttonSend}
    </View>

  );
}

export default FormComponent;