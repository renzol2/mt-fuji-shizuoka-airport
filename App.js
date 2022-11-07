import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomNavigator from './components/BottomNavigator';
import HomeScreen from './screens/HomeScreen';
import PinsScreen from './screens/PinsScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
