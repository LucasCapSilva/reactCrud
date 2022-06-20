import { NavigationContainer } from '@react-navigation/native';
import DrawlerNavigation from './src/routes/drawlerNavigation/DrawlerNavigation';
import StackNavigation from './src/routes/stackNavigation/StackNavigation';
import TabNavigation from './src/routes/tabNavigation/TabNavigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
    <StackNavigation/>
    </NavigationContainer>
  
  );
}

