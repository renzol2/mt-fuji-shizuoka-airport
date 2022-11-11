import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { colorScheme } from "../Styles";
import { gates } from "../data/amenities";

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
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>{name}</Button>}
                >
                    {gates.map((gate) => {
                        return (
                            <Menu.Item
                                onPress={() => setName("Selected: " + gate)}
                                title={gate}
                            />
                        );
                    })}
                </Menu>
            </View>
        </Provider>
    );
};

export default GatePicker;
