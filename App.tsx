import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import PostPutCategoryComponent from './src/components/dinamicsComponents/categorys/postPutCategory/PostPutCategoryComponent';
import DrawlerNavigation from './src/routes/drawlerNavigation/DrawlerNavigation';
import StackNavigation from './src/routes/stackNavigation/StackNavigation';
import TabNavigation from './src/routes/tabNavigation/TabNavigation';


export default function App() {
  return (
    <NavigationContainer>
    <StackNavigation/>
    </NavigationContainer>
    // <View>
    //   <PostPutCategoryComponent/>
    // </View>
  );
}

