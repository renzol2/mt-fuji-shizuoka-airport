import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import { Button, Card, Colors, IconButton } from "react-native-paper";
import AppBar from "../Components/AppBar";
import FlightCard from "../Components/FlightCard";
import { flights } from "../data/flight";
import { colorScheme } from "../Styles";
import AmenityFinder from "./AmenityFinder";
import AmenityResults from "./AmenityResults";
import FlightSearch from "./FlightSearch";

/**
 * Home screen first shown
 * @param {{ pinnedFlight: import('../data/flight').Flight | undefined }}
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
                        onPress={() => navigation.navigate("FlightSearch")}
                    >
                        Flight Search
                    </Button>
                </View>

                {/* Pinned flight card */}
                {/* FIXME: MIGHT SWITCH THIS OUT OF BEING A CARD DUE TO FORMATTING LIMITATIONS IN A CARD */}
                <Card style={styles.card}>
                    <Card.Title
                        style={{ fontSize: 30 }}
                        title="Your Flight Information"
                    />
                    <Card.Content>
                        {pinnedFlight !== undefined ? (
                            <FlightCard
                                allowPinning={false}
                                airline={pinnedFlight.airline}
                                arrival={pinnedFlight.arrival}
                                date={pinnedFlight.date}
                                departure={pinnedFlight.departure}
                                gate={pinnedFlight.gate}
                                number={pinnedFlight.number}
                                time={pinnedFlight.time}
                            />
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
