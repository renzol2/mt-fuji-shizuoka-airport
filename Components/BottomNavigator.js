import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;

const SearchRoute = () => <Text>Search</Text>;

const PinsRoute = () => <Text>Pins</Text>;

// See: https://callstack.github.io/react-native-paper/bottom-navigation.html
const BottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
    { key: 'search', title: 'Search', focusedIcon: 'magnify' },
    { key: 'pins', title: 'Pins', focusedIcon: 'pin' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    pins: PinsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigator;