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
import { Button, Card, DataTable } from "react-native-paper";
import AppBar from "../Components/AppBar";
import FlightCard from "../Components/FlightCard";
import { FLIGHTS } from "../data/flight";
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

                    {/* Flight schedule */}
                    {/* TODO: move this to a new screen */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator
                    >
                        <DataTable style={styles.flightSchedule}>
                            <DataTable.Header>
                                <DataTable.Title>Number</DataTable.Title>
                                <DataTable.Title>Airline</DataTable.Title>
                                <DataTable.Title>Departure</DataTable.Title>
                                <DataTable.Title>Arrival</DataTable.Title>
                                <DataTable.Title>Date</DataTable.Title>
                                <DataTable.Title>Time</DataTable.Title>
                                <DataTable.Title>Gate</DataTable.Title>
                            </DataTable.Header>
                            {FLIGHTS.map((flight) => (
                                <DataTable.Row key={flight.number}>
                                    <DataTable.Cell
                                        style={styles.flightScheduleCell}
                                    >
                                        {flight.number}
                                    </DataTable.Cell>
                                    <DataTable.Cell
                                        style={styles.flightScheduleCell}
                                    >
                                        {flight.airline}
                                    </DataTable.Cell>
                                    <DataTable.Cell
                                        style={styles.flightScheduleCell}
                                    >
                                        {flight.departure}
                                    </DataTable.Cell>
                                    <DataTable.Cell
                                        style={styles.flightScheduleCell}
                                    >
                                        {flight.arrival}
                                    </DataTable.Cell>
                                    <DataTable.Cell
                                        style={styles.flightScheduleCell}
                                    >
                                        {flight.date}
                                    </DataTable.Cell>
                                    <DataTable.Cell
                                        style={styles.flightScheduleCell}
                                    >
                                        {flight.time}
                                    </DataTable.Cell>
                                    <DataTable.Cell
                                        style={styles.flightScheduleCell}
                                    >
                                        {flight.gate}
                                    </DataTable.Cell>
                                </DataTable.Row>
                            ))}
                        </DataTable>
                    </ScrollView>
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
        height: 250,
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
    },
    flightScheduleCell: {
        minWidth: 150,
    },
});

export default HomeScreen;
