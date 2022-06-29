import { Image, Text, View } from 'react-native';
import { styles } from './LogoComponentStyle';


const LogoComponent = ({ image}:any) => {

    return (
      <View style={styles.logo}>
         <Image
        source={require('../../../../assets/Logo/Pay_logo.png')}
      />
      </View>
     
    );
}

export default LogoComponent;