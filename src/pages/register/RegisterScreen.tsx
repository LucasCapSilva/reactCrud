import * as React from 'react';
import FormComponent from '../../components/structural components/formComponent/FormComponent';
import InputComponent from '../../components/structural components/formComponent/inputComponent/InputComponent';
import { styles } from './RegisterStyle';
import ButtonComponent from '../../components/structural components/formComponent/buttonComponent/ButtonComponent';
import LogoComponent from '../../components/structural components/logoComponent/LogoComponent';
import TitleComponent from '../../components/structural components/textComponent/titleComponent/TitleComponent';
import SubTitleComponent from '../../components/structural components/textComponent/subTitleComponent/SubTitleComponent';
import { useEffect, useState } from 'react';
import { View, Alert, ScrollView, TouchableOpacity, Text } from 'react-native';



const RegisterScreen = ({ navigation }: any) => {

  function handleClick() {
    alert('Register');
  }

  function goToRegister() {
    navigation.navigate('Login');
   }


  const [inputs, setInputs] = useState([{ input: <InputComponent title={"Name"} type={"text"} /> }, { input: <InputComponent title={"Phone"} type={"phone-pad"} /> }, { input: <InputComponent title={"Email"} type={"email"} /> }, { input: <InputComponent title={"Password"} type={"password"} /> }]);
  const [buttons, setButtons] = useState([])
  const [buttonSend, setButtonSend] = useState(<ButtonComponent handleClick={handleClick} title={"Register"} styleVariant="warning" />)



  return (
    <View style={styles.container}>
      <ScrollView >

        <View>
          <View style={{ marginVertical: 30 }}>
            <LogoComponent />
          </View>
          <TitleComponent text={"Create new Account!"} />
          <SubTitleComponent text={"Lets create Account Toghter!"} />
        </View>
        
        <View>
          <FormComponent inputsComponents={inputs} buttonsComponents={buttons} buttonSendComponent={buttonSend} />
        </View>
        
      </ScrollView>
      <View style={styles.flexContainer}>
        <View style={styles.miniContainer}>
        <SubTitleComponent text={"Have Account"} /> 
        </View>
        <ButtonComponent handleClick={goToRegister} title={"Log In"} styleVariant="none" />
   
      </View>
     
    </View>
  );
}

export default RegisterScreen;