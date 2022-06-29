import * as React from 'react';
import { View } from 'react-native';
import FormComponent from '../../components/structural components/formComponent/FormComponent';
import InputComponent from '../../components/structural components/formComponent/inputComponent/InputComponent';
import { useState } from 'react';
import { styles } from './LoginStyle';
import ButtonComponent from '../../components/structural components/formComponent/buttonComponent/ButtonComponent';
import LogoComponent from '../../components/structural components/logoComponent/LogoComponent';
import TitleComponent from '../../components/structural components/textComponent/titleComponent/TitleComponent';
import SubTitleComponent from '../../components/structural components/textComponent/subTitleComponent/SubTitleComponent';


const LoginScreen = () => {

  function handleClick() {
    alert('Ola mundo');
  }

  const [inputs, setInputs] = useState([{ input: <InputComponent title={"Email"} type={"email"} /> }, { input: <InputComponent title={"Senha"} type={"password"} /> }]);
  const [buttons, setButtons] = useState([{ button: <ButtonComponent handleClick={handleClick}  title={"Login In"} /> }, { button: <ButtonComponent handleClick={handleClick} title={"Go Back"} /> }])
  const [buttonSend, setButtonSend] = useState(<ButtonComponent handleClick={handleClick} title={"Send"} />)


  return (
    <View style={styles.container}>
      <View>
        <View style={{ marginVertical: 30 }}>
          <LogoComponent />
        </View>
        <TitleComponent text={"Welcome Back!"} />
        <SubTitleComponent text={"Lets get Start!"} />
      </View>
      <FormComponent inputsComponents={inputs} buttonSendComponent={buttonSend} />

    </View>
  );
}

export default LoginScreen;