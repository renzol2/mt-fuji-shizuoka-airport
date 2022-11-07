import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import PinsScreen from '../Screens/PinsScreen';
import SearchScreen from '../Screens/SearchScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const [pinnedFlight, setPinnedFlight] = useState(undefined);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        children={() => <HomeScreen pinnedFlight={pinnedFlight} />}
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
        children={() => (
          <PinsScreen pinnedFlight={pinnedFlight} setPinnedFlight={setPinnedFlight} />
        )}
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
