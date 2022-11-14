import { ScrollView, StyleSheet } from "react-native";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native-paper";

export default function AmenityResults({ route }) {
    const { gateName } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <ScrollView>
                <Text style={{ color: "white" }}>{gateName}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },
});
