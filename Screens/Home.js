import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import AppBar from "../Components/AppBar";
import { flights } from "../data/flight";
import { colorScheme } from "../Styles";
import AmenityFinder from "./AmenityFinder";
import AmenityResults from "./AmenityResults";
import FlightSearch from "./FlightSearch";

const Stack = createNativeStackNavigator();

/**
 * Home screen first shown
 * @param {{ pinnedFlight: import('../data/flight').Flight }}
 */
function HomeScreen({ pinnedFlight }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <ScrollView>
                <View style={styles.hStack}>
                    {/* Empty View to move objects down the screen */}
                </View>

                <View style={styles.vStack}>
                    <Button
                        mode="contained"
                        icon="door-sliding"
                        style={styles.vStackItem}
                        labelStyle={styles.buttonText}
                        onPress={() => navigation.navigate("")}
                    >
                        Flight Schedule
                    </Button>
                    <Button
                        mode="contained"
                        icon="door-sliding"
                        style={styles.vStackItem} // CHANGE THIS TO BATHROOM ICON
                        labelStyle={styles.buttonText}
                        onPress={() => navigation.navigate("AmenityFinder")}
                    >
                        Airport Amenities
                    </Button>
                    <Button
                        mode="contained"
                        icon="format-list-bulleted"
                        style={styles.vStackItem}
                        labelStyle={styles.buttonText}
                        onPress={() => navigation.navigate("FlightSearch")}
                    >
                        Flight Search
                    </Button>
                </View>

                {/* MIGHT SWITCH THIS OUT OF BEING A CARD DUE TO FORMATTING LIMITARIONS IN A CARD */}
                <Card style={styles.card}>
                    <Card.Title
                        style={{ fontSize: 30 }}
                        title="Your Flight Information"
                    />
                    <Card.Content>
                        {pinnedFlight !== undefined ? (
                            <>
                                <Text style={styles.cardBodyRight}>
                                    Gate: {pinnedFlight.gate}
                                </Text>
                                <Text style={styles.cardBody}>
                                    Time: {pinnedFlight.time}{" "}
                                </Text>
                                <Text style={styles.cardBody}>
                                    Departure: {pinnedFlight.departure}
                                </Text>
                                <Text style={styles.cardBody}>
                                    Arrival: {pinnedFlight.arrival}
                                </Text>
                            </>
                        ) : (
                            <Text style={styles.cardBody}>
                                Pin a Flight to see it here!
                            </Text>
                        )}
                    </Card.Content>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
}

/**
 * Navigator for all screens under the Home tab
 * @param {{ pinnedFlight: import("../data/flight").Flight }}
 */
export default function Home({ pinnedFlight }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                children={() => <HomeScreen pinnedFlight={pinnedFlight} />}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AmenityFinder"
                component={AmenityFinder}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AmenityResults"
                component={AmenityResults}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="FlightSearch"
                component={FlightSearch}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

// TODO later: MOVE THIS STYLESHEET TO STYLES.JS (AND EXPORT)
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
