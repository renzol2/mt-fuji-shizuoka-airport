import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import { Button, Card, Colors, IconButton } from "react-native-paper";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";

/**
 * Home screen first shown
 * @param {{ pinnedFlight: import('../data/flight').Flight }}
 */
function HomeScreen({ pinnedFlight, setPinnedFlight }) {
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
                        icon="toilet"
                        style={styles.vStackItem}
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
                    >
                        Flight Search
                    </Button>
                </View>

                {/* Pin button */}
                <IconButton
                    icon="pin"
                    size={50}
                    color={Colors.white}
                    onPress={() => {
                        if (pinnedFlight === undefined) {
                            setPinnedFlight({
                                number: "Q1776",
                                departure: "Chicago O'Hare",
                                arrival: "Doha International",
                                time: "13:00",
                                airline: "Qatar Airlines",
                                gate: "C6",
                            });
                        } else {
                            setPinnedFlight(undefined);
                        }
                    }}
                    style={{ alignSelf: 'center' }}
                />
                {/* Pinned flight card */}
                {/* FIXME: MIGHT SWITCH THIS OUT OF BEING A CARD DUE TO FORMATTING LIMITATIONS IN A CARD */}
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
        marginTop: 70,
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

export default HomeScreen;
