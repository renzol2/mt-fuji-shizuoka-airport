import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";
import FlightCard from "../Components/FlightCard";
import { FLIGHTS } from "../data/flight";

/**
 *
 * @param {{
 *  route: import("@react-navigation/native").Route,
 *  pinnedFlight: import("../data/flight").Flight | undefined,
 *  setPinnedFlight: React.SetStateAction
 * }}
 */
export default function FlightMatches({
    route,
    pinnedFlight,
    setPinnedFlight,
}) {
    const { number, departure, arrival, date } = route.params;
    let flights = [];

    if (number === undefined || number === "") {
        flights = FLIGHTS.filter(
            (flight) =>
                flight.departure == departure &&
                flight.arrival == arrival &&
                flight.date == date
        );
    } else {
        flights = FLIGHTS.filter((flight) => flight.number == number);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <ScrollView>
                <Text style={styles.header}>Matching Flights</Text>
                <View style={styles.flightCardContainer}>
                    {flights.map(
                        ({
                            number,
                            airline,
                            departure,
                            arrival,
                            date,
                            time,
                            gate,
                        }) => (
                            <FlightCard
                                key={number}
                                number={number}
                                airline={airline}
                                departure={departure}
                                arrival={arrival}
                                date={date}
                                time={time}
                                gate={gate}
                                pinnedFlight={pinnedFlight}
                                setPinnedFlight={setPinnedFlight}
                            />
                        )
                    )}
                </View>
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
        marginTop: 20,
    },
    flightCardContainer: {
        marginTop: 10,
    },
});