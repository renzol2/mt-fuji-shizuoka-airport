import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Provider } from "react-native-paper";
import { GATES } from "../data/restaurants";


const GatePicker = ({ gateName, setGateName }) => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (

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
                anchor={<Button mode='contained' onPress={openMenu}>{gateName}</Button>}
            >
                {GATES.map((gate) => {
                    return (
                        <Menu.Item
                            onPress={() => {
                                setGateName("Selected: " + gate);
                                closeMenu();
                            }}
                            title={gate}
                            key={gate}
                        />
                    );
                })}
            </Menu>
        </View>

    );
};

export default GatePicker;
