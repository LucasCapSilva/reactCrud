import * as React from 'react';
import FormComponent from '../../components/structural components/formComponent/FormComponent';
import InputComponent from '../../components/structural components/formComponent/inputComponent/InputComponent';
import { styles } from './LoginStyle';
import ButtonComponent from '../../components/structural components/formComponent/buttonComponent/ButtonComponent';
import LogoComponent from '../../components/structural components/logoComponent/LogoComponent';
import TitleComponent from '../../components/structural components/textComponent/titleComponent/TitleComponent';
import SubTitleComponent from '../../components/structural components/textComponent/subTitleComponent/SubTitleComponent';
import { useEffect, useState } from 'react';
import { View, Alert, LogBox, ScrollView } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const LoginScreen = ({navigation}:any) => {

  function handleClick() {
    alert('Ola mundo');
  }

  function goToRegister() {
   navigation.navigate('Register');
  }

  async function auth(){
    try {
      let results = await LocalAuthentication.authenticateAsync();
      if(results.success) {
        Alert.alert('alert', 'login success')
      } else {
        Alert.alert('alert',  JSON.stringify(results))
      }
      // LocalAuthentication.cancelAuthenticate();
    }catch(err) {
      Alert.alert('alert', 'login fail: ' + err)
      console.log(err);
    }
    
  }

  const [inputs, setInputs] = useState([{ input: <InputComponent title={"Email"} type={"email"} /> }, { input: <InputComponent title={"Password"} type={"password"} /> }]);
  const [buttons, setButtons] = useState([{ button: <ButtonComponent handleClick={handleClick}  title={"Login In"} styleVariant="sucess" /> }, { button: <ButtonComponent handleClick={goToRegister} title={"Register"} styleVariant="warning"/> }])
  const [buttonSend, setButtonSend] = useState(<ButtonComponent handleClick={auth} title={"Biometric"} styleVariant="default"/>)
  
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <View style={styles.container}>
        
      <View>
        <View style={{ marginVertical: 30 }}>
          <LogoComponent />
        </View>
        <TitleComponent text={"Welcome Back!"} />
        <SubTitleComponent text={"Lets get Start!"} />
      </View>
      <FormComponent inputsComponents={inputs} buttonsComponents={buttons} buttonSendComponent={buttonSend} />
     
    </View>
  );
}

export default LoginScreen;