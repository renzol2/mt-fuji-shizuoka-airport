import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Provider } from "react-native-paper";
import { GATES } from "../data/amenities";

const GatePicker = () => {
    const UNSELECTED_GATE_NAME = "Select a Gate!";
    const [visible, setVisible] = React.useState(false);
    const [gateName, setGateName] = React.useState(UNSELECTED_GATE_NAME);
    const navigation = useNavigation();

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
                    anchor={<Button onPress={openMenu}>{gateName}</Button>}
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
                <Button
                    mode="contained"
                    onPress={() => {
                        navigation.navigate("AmenityResults", {
                            gateName: gateName,
                        });
                    }}
                    disabled={gateName === UNSELECTED_GATE_NAME}
                >
                    Find amenities
                </Button>
            </View>
        </Provider>
    );
};

export default GatePicker;
