
import { useState } from 'react';
import { Text, View } from 'react-native';
import AllCardsComponets from '../../components/structural components/allCardsComponents/AllCardsComponets';
import ButtonComponent from '../../components/structural components/buttonComponent/ButtonComponent';
import CaroucelComponent from '../../components/structural components/caroucelComponent/CaroucelComponent';
import { styles } from './HomeStyle'

const HomeScreen = () => {
  const [categorys, setCategorys] = useState<any[]>([{ id: 1, description: 'Category 1' }, { id: 2, description: 'Category 2' }, { id: 3, description: 'Category 3' }])
  const [datas, setDatas] = useState([
    {
      id: 1,
      image: `https://picsum.photos/1440/2842?random=1`,
      title: `This is the title 1!`,
      subtitle: `This is the subtitle 1!`,
    },
    {
      id: 2,
      image: `https://picsum.photos/1440/2842?random=1`,
      title: `This is the title 2!`,
      subtitle: `This is the subtitle 2!`,
    },
    {
      id: 3,
      image: `https://picsum.photos/1440/2842?random=1`,
      title: `This is the title 3!`,
      subtitle: `This is the subtitle 3!`,
    },
  ]);
  function handleClick() {
    alert('Ola mundo');
  }

  return (


      <View style={styles.container}>
        <Text style={styles.title}>HomeComponent</Text>

        <ButtonComponent handleClick={handleClick} variation={"styles.sucess"} title={"Hello"} logo={"delete-outline"} />
        <AllCardsComponets data={categorys} />


      </View>

      // <View style={styles.container2}>
      //   <CaroucelComponent data={datas} />
      // </View>



  );
}

export default HomeScreen;