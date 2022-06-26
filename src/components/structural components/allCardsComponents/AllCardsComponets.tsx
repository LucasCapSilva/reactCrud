import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import ButtonComponent from '../buttonComponent/ButtonComponent';
import { styles } from './AllCardsComponetsStyle';


const AllCardsComponets = ({ data }: any) => {

    const [datas, setDatas] = useState<any[]>([])

    useEffect(() => {
      setDatas(data)
      })  

    return (
        <View>
            <FlatList
                data={datas}
                renderItem={(data) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.cardItem}>
                                <Text style={styles.textItem}>{data.item.id}</Text>
                                <Text style={styles.textItem}>  {data.item.description}</Text>
                            </View>
                            <View style={styles.cardItem}>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }}
                                />
                            </View>
                            <View style={styles.cardItem}>
                            <ButtonComponent  variation={"styles.sucess"} title={"Send"} logo={"delete-outline"}/>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}

export default AllCardsComponets;