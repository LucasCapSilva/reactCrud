import { NavigationContainer } from '@react-navigation/native';
import DrawlerNavigation from './src/routes/drawlerNavigation/DrawlerNavigation';
import StackNavigation from './src/routes/stackNavigation/StackNavigation';
import TabNavigation from './src/routes/tabNavigation/TabNavigation';


export default function App() {
  return (
    <NavigationContainer>
    <StackNavigation/>
    </NavigationContainer>
  
  );
}

