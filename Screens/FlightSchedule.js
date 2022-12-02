import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, Colors, DataTable, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../Components/AppBar";
import { FLIGHTS } from "../data/flight";
import { colorScheme } from "../Styles";

export default function FlightSchedule({ pinnedFlight, setPinnedFlight }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    /** Function to pin flight given its flight number */
    const pinFlight = (
        isPinned,
        number,
        airline,
        departure,
        arrival,
        date,
        gate
    ) => {
        // If this flight is pinned, unpin it
        if (isPinned) {
            setPinnedFlight(undefined);
        } else if (
            // If there's no pinned flight, or the current pinned flight is
            // not this flight, then pin this flight
            pinnedFlight === undefined ||
            (pinnedFlight !== undefined && !isPinned)
        ) {
            setPinnedFlight({
                number,
                airline,
                departure,
                arrival,
                date,
                gate,
            });
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar useBackButton />
            <ScrollView>
                <Text style={styles.header}>Flight Schedule</Text>
                <TextInput
                    style={styles.input}
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                    placeholder="Search for flights"
                    placeholderTextColor="grey"
                />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator
                >
                    <DataTable style={styles.flightSchedule}>
                        <DataTable.Header>
                            <DataTable.Title>Number</DataTable.Title>
                            <DataTable.Title>Pin</DataTable.Title>
                            <DataTable.Title>Airline</DataTable.Title>
                            <DataTable.Title>Departure</DataTable.Title>
                            <DataTable.Title>Arrival</DataTable.Title>
                            <DataTable.Title>Date</DataTable.Title>
                            <DataTable.Title>Time</DataTable.Title>
                            <DataTable.Title>Gate</DataTable.Title>
                        </DataTable.Header>
                        {FLIGHTS.filter(
                            (flight) =>
                                flight.departure
                                    .toUpperCase()
                                    .includes(
                                        searchQuery.toUpperCase().trim()
                                    ) ||
                                flight.number
                                    .toUpperCase()
                                    .includes(
                                        searchQuery.toUpperCase().trim()
                                    ) ||
                                flight.arrival
                                    .toUpperCase()
                                    .includes(
                                        searchQuery.toUpperCase().trim()
                                    ) ||
                                flight.airline
                                    .toUpperCase()
                                    .includes(
                                        searchQuery.toUpperCase().trim()
                                    ) ||
                                flight.date
                                    .toDateString()
                                    .includes(searchQuery.toUpperCase().trim())
                        ).map(
                            (
                                {
                                    number,
                                    airline,
                                    departure,
                                    arrival,
                                    date,
                                    gate,
                                },
                                i
                            ) => {
                                const isPinned =
                                    pinnedFlight !== undefined &&
                                    pinnedFlight.number === number;
                                return (
                                    <DataTable.Row key={number}>
                                        <DataTable.Cell
                                            style={
                                                i % 2 === 0
                                                    ? styles.flightScheduleNumberCell
                                                    : styles.flightScheduleNumberCellAlternate
                                            }
                                        >
                                            {number}
                                        </DataTable.Cell>
                                        <DataTable.Cell
                                            style={
                                                i % 2 === 0
                                                    ? styles.flightSchedulePinCell
                                                    : styles.flightSchedulePinCellAlternate
                                            }
                                        >
                                            <Button
                                                icon={
                                                    isPinned
                                                        ? "pin"
                                                        : "pin-outline"
                                                }
                                                iconColor={Colors.purple100}
                                                onPress={() =>
                                                    pinFlight(
                                                        isPinned,
                                                        number,
                                                        airline,
                                                        departure,
                                                        arrival,
                                                        date,
                                                        gate
                                                    )
                                                }
                                            >
                                                Pin
                                            </Button>
                                        </DataTable.Cell>
                                        <DataTable.Cell
                                            style={
                                                i % 2 === 0
                                                    ? styles.flightScheduleCell
                                                    : styles.flightScheduleCellAlternate
                                            }
                                        >
                                            {airline}
                                        </DataTable.Cell>
                                        <DataTable.Cell
                                            style={
                                                i % 2 === 0
                                                    ? styles.flightScheduleCell
                                                    : styles.flightScheduleCellAlternate
                                            }
                                        >
                                            {departure}
                                        </DataTable.Cell>
                                        <DataTable.Cell
                                            style={
                                                i % 2 === 0
                                                    ? styles.flightScheduleCell
                                                    : styles.flightScheduleCellAlternate
                                            }
                                        >
                                            {arrival}
                                        </DataTable.Cell>
                                        <DataTable.Cell
                                            style={
                                                i % 2 === 0
                                                    ? styles.flightScheduleCell
                                                    : styles.flightScheduleCellAlternate
                                            }
                                        >
                                            {date.toDateString()}
                                        </DataTable.Cell>
                                        <DataTable.Cell
                                            style={
                                                i % 2 === 0
                                                    ? styles.flightScheduleCell
                                                    : styles.flightScheduleCellAlternate
                                            }
                                        >
                                            {`${
                                                date.getHours() <= 12
                                                    ? date
                                                          .getHours()
                                                          .toString()
                                                          .padStart(2, 0)
                                                    : (date.getHours() - 12)
                                                          .toString()
                                                          .padStart(2, 0)
                                            }:${date
                                                .getMinutes()
                                                .toString()
                                                .padStart(2, 0)} ${
                                                date.getHours() < 12
                                                    ? "AM"
                                                    : "PM"
                                            }`}
                                        </DataTable.Cell>
                                        <DataTable.Cell
                                            style={
                                                i % 2 === 0
                                                    ? styles.flightScheduleCell
                                                    : styles.flightScheduleCellAlternate
                                            }
                                        >
                                            {gate}
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                );
                            }
                        )}
                    </DataTable>
                </ScrollView>
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
        color: "gray",
        marginTop: 30,
        marginBottom: 20,
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
    flightSchedulePinCell: {
        minWidth: 150,
        padding: 5,
    },
    flightSchedulePinCellAlternate: {
        minWidth: 150,
        padding: 5,
        backgroundColor: colorScheme.backgroundPage,
    },
    input: {
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignSelf: "stretch",
        borderColor: colorScheme.dark,
        color: "black",
    },
});
