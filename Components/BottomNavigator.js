import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PinsScreen from '../screens/PinsScreen';
import SearchScreen from '../screens/SearchScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Pins"
        component={PinsScreen}
        options={{
          tabBarLabel: 'Pins',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pin" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
