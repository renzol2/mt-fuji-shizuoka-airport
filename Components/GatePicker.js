import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Provider, Snackbar } from "react-native-paper";
import { GATES } from "../data/gates";
import { colorScheme } from "../Styles";

/**
 * Paper menu that allows user to select a gate
 * @param {{ gateName: string, setGateName: React.SetStateAction, isUnselected: boolean, showSnackbar: true, setShowSnackbar: React.SetStateAction }}
 */
const GatePicker = ({
    gateName,
    setGateName,
    isUnselected,
    showSnackbar,
    setShowSnackbar,
}) => {
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
                anchor={
                    <Button
                        style={{
                            backgroundColor: colorScheme.dark,
                            borderRadius: 30,
                        }}
                        mode="contained"
                        onPress={openMenu}
                    >
                        {isUnselected
                            ? "Select a gate"
                            : `Selected: ${gateName}`}
                    </Button>
                }
            >
                {GATES.map((gate) => {
                    return (
                        <Menu.Item
                            onPress={() => {
                                setShowSnackbar(true);
                                setGateName(gate);
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
