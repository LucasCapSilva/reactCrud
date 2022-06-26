
import { Text, View } from 'react-native';
import ButtonComponent from '../../components/structural components/buttonComponent/ButtonComponent';
import {styles} from './HomeStyle'

const HomeScreen = () => {

  function handleClick() {
    alert('Ola mundo');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeComponent</Text>  
      <ButtonComponent  handleClick={handleClick} variation={"styles.sucess"} title={"Hello"} logo={"delete-outline"}/>
    </View>
  );
}

export default HomeScreen;