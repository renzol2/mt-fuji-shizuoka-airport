import * as React from "react";
import { Appbar } from "react-native-paper";
import { colorScheme } from "../Styles";
import { useNavigation } from "@react-navigation/native";

export default function AppBar() {
    const navigation = useNavigation();

    return (
        <Appbar.Header style={{ backgroundColor: colorScheme.primary }}>
            <Appbar.BackAction
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <Appbar.Content title="O'Hare International Airport" />
        </Appbar.Header>
    );
}
