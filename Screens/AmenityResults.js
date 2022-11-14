import { ScrollView, StyleSheet } from "react-native";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native-paper";
import RestaurantsList from "../Components/RestaurantsList";

/**
 * Displays the search results for amenities. Takes a `gateName`
 * through route parameters by `react-navigation`.
 */
export default function AmenityResults({ route }) {
    const { gateName } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <ScrollView>
                <Text
                    style={styles.header}
                >{`Amenities at gate ${gateName}`}</Text>
                <RestaurantsList gate={gateName} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginVertical: 20,
    },
});
