import * as React from 'react';
import FormComponent from '../../components/structural components/formComponent/FormComponent';
import InputComponent from '../../components/structural components/formComponent/inputComponent/InputComponent';
import { styles } from './TransferScreenStyle';
import ButtonComponent from '../../components/structural components/formComponent/buttonComponent/ButtonComponent';
import LogoComponent from '../../components/structural components/logoComponent/LogoComponent';
import TitleComponent from '../../components/structural components/textComponent/titleComponent/TitleComponent';
import SubTitleComponent from '../../components/structural components/textComponent/subTitleComponent/SubTitleComponent';
import { useEffect, useState } from 'react';
import { View, Alert, ScrollView, TouchableOpacity, Text } from 'react-native';



const TransferScreen = ({ navigation }: any) => {

  function handleClick() {
    alert('Send Money');
  }

 


  const [inputs, setInputs] = useState([{ input: <InputComponent title={"Agency"} type={"numeric"} /> }, { input: <InputComponent title={"Account"} type={"numeric"} /> },{ input: <InputComponent title={"Value"} type={"numeric"} /> }]);
  const [buttons, setButtons] = useState([])
  const [buttonSend, setButtonSend] = useState(<ButtonComponent handleClick={handleClick} title={"Send Money"} styleVariant="warning" />)



  return (
    <View style={styles.container}>
      <ScrollView >

        <View>
          <View style={{ marginVertical: 30 }}>
            <LogoComponent />
          </View>
          <TitleComponent text={"Transfer Money!"} />
          <SubTitleComponent text={"Transfer money now!"} />
        </View>
        
        <View>
          <FormComponent inputsComponents={inputs} buttonsComponents={buttons} buttonSendComponent={buttonSend} />
        </View>
        
      </ScrollView>
 
     
    </View>
  );
}

export default TransferScreen;