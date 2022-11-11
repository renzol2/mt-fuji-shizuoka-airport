import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Provider } from "react-native-paper";
import { GATES } from "../data/amenities";

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
                    {GATES.map((gate) => {
                        return (
                            <Menu.Item
                                onPress={() => {
                                    setName("Selected: " + gate);
                                    closeMenu();
                                }}
                                title={gate}
                                key={gate}
                            />
                        );
                    })}
                </Menu>
            </View>
        </Provider>
    );
};

export default GatePicker;
