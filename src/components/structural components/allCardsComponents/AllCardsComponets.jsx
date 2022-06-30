import { useEffect, useState } from 'react';
import {  ScrollView, View } from 'react-native';
import { styles } from './AllCardsComponetsStyle';


const AllCardsComponets = ({ data }) => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
      setDatas(data)
      })  

    return (
        <ScrollView style={styles.containerCard}>
           {
          datas.map((data, i) => {
            return (
              <View key={i} >
                {data.card}
              </View>
            )
          })
        }
        </ScrollView>
    );
}

export default AllCardsComponets;