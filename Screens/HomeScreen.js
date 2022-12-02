import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    StyleSheet,
    ImageBackground,
} from "react-native";
import {
    Button,
    Card,
    Colors,
    DataTable,
    IconButton,
} from "react-native-paper";
import AppBar from "../Components/AppBar";
import FlightCard from "../Components/FlightCard";
import { FLIGHTS } from "../data/flight";
import { colorScheme } from "../Styles";

/**
 * Home screen first shown
 * @param {{ pinnedFlight: import('../data/flight').Flight | undefined, setPinnedFlight: React.SetStateAction}}
 */
function HomeScreen({ pinnedFlight, setPinnedFlight }) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar useBackButton={false} />
            <ImageBackground
                styles={styles.imageBackround}
                source={require("../images/clouds32.png")}
                resizeMode="cover"
            >
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
                            onPress={() =>
                                navigation.navigate("FlightSchedule")
                            }
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
            </ImageBackground>
        </SafeAreaView>
    );
}

// TODO later: MOVE THIS STYLESHEET TO STYLES.JS (AND EXPORT)
const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1,
        // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },

    imageBackround: {
        flex: 1,
        justifyContent: "center",
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
        borderRadius: 30,
    },

    buttonText: {
        fontSize: 20,
    },
    card: {
        backgroundColor: colorScheme.light,
        height: 300,
        marginBottom: 70,
    },
    cardBody: {
        fontSize: 20,
    },
    cardBodyRight: {
        alignContent: "flex-end",
        fontSize: 25,
    },
    flightSchedule: {
        minWidth: 1000,
        textAlign: "center",
        backgroundColor: colorScheme.light,
        marginBottom: 60,
    },
    flightScheduleCell: {
        minWidth: 150,
        // padding: 5,
    },
    flightScheduleCellAlternate: {
        minWidth: 150,
        // padding: 5,
        backgroundColor: colorScheme.backgroundPage,
    },
    flightScheduleNumberCell: {
        minWidth: 150,
        padding: 5,
    },
    flightScheduleNumberCellAlternate: {
        minWidth: 150,
        padding: 5,
        backgroundColor: colorScheme.backgroundPage,
    },
});

export default HomeScreen;
