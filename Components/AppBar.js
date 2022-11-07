import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="O'Hare International Airport" />
    </Appbar.Header>
);

export default AppBar;