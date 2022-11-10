import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { colorScheme } from '../Styles';
import { gates } from '../data/amenities';

const GatePicker = () => {
    const [visible, setVisible] = React.useState(false);
    const [name, setName] = React.useState("Select a Gate!");

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <Provider>
            <View
                style={{
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>{name}</Button>}>
                    {
                        gates.map((gate) => {
                            return <Menu.Item onPress={() => setName("Selected: " + gate)} title={gate} />
                        })
                    }
                </Menu>
            </View>
        </Provider>
    );
};

export default GatePicker;


const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },

    hStack: {
        flexDirection: "row",
        marginBottom: 50,
        justifyContent: "space-evenly",
        marginTop: 70
    },

    vStack: {
        flexDirection: "column",
        height: 400,
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    hStackItem: {
        width: 150,
        backgroundColor: colorScheme.primary,
    },

    vStackItem: {
        width: 300,
        padding: 10,
        backgroundColor: colorScheme.primary,
    },

    buttonText: {
        fontSize: 20,
    },
    card: {
        backgroundColor: colorScheme.light,
    },
    cardBody: {
        fontSize: 20,
    },
    cardBodyRight: {
        alignContent: "flex-end",
        fontSize: 25,
    },
});