
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './HomeStyle'
import CreditCardComponent from '../../components/structural components/creditCard/CreditCardComponent';
import CardNameComponent from '../../components/structural components/cards/cardNameComponent/CardNameComponent';
import CardMoneyComponent from '../../components/structural components/cards/cardMoneyComponent/CardMoneyComponent';
import CardTransactionComponent from '../../components/structural components/cards/cardTransactionComponent/CardTransactionComponent';
import AllCardsComponets from '../../components/structural components/allCardsComponents/AllCardsComponets';


const HomeScreen = () => {
  const [datas, setDatas] = useState([
    {card:<CardTransactionComponent name={'Netflix'} value={100.00}/>}
  ,{card:<CardTransactionComponent name={'Ifood'} value={55.00}/>}
  ,{card:<CardTransactionComponent name={'Nagumo'} value={350.55}/>}
  ,{card:<CardTransactionComponent name={'Mercado Livre'} value={1.264}/>}])
  function handleClick() {
    alert('Ola mundo');
  }

  return (

    <View style={styles.container}>
     
      
      <View>
        
        <CardNameComponent name={"Lucas"}/>
      </View>
      <View>
        <CreditCardComponent bankStatement={"$5,156.00"} numberCard={"63.431.145"} nameCard={"Lucas C Silva"}/>
        <CardMoneyComponent value={4.264}/>
        <View>
          <AllCardsComponets  data={datas}/>
        <CardTransactionComponent name={'Netflix'} value={4.264}/>
        
        </View>
        

      </View>
      
      
    
    </View>

  );
}

export default HomeScreen;