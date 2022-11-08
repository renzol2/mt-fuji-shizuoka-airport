import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { colorScheme } from '../Styles';

const AppBar = () => (
  <Appbar.Header style={{ backgroundColor: colorScheme.primary }} >
    <Appbar.Content title="O'Hare International Airport" />
  </Appbar.Header>
);

export default AppBar;
