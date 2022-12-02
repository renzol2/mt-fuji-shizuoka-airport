import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Surface } from "react-native-paper";
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

    /** Find flights by date/departure */
    if (number === undefined || number === "") {
        flights = FLIGHTS.filter(
            (flight) =>
                flight.departure == departure &&
                flight.arrival == arrival &&
                flight.date == date
        );
        /** Find flights by flight number */
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
                            < FlightCard
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
                    {flights.length === 0 && (

                        <Surface style={styles.surfaceStyle}>
                            <View>
                                <Text style={styles.errorTitle}>No flights were found for the specifed flight number or location. </Text>
                                <Text style={styles.errorTitle}>Please make sure the number or departure information was entered correctly.</Text>
                            </View>
                        </Surface>
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
        color: "gray",
        marginTop: 20,
    },
    flightCardContainer: {
        marginTop: 10,
    },
    surfaceStyle: {
        marginVertical: 10,
        padding: 20,
        elevation: 4,
        textAlign: "left",
        backgroundColor: "#ef5350",
        flexDirection: "row",
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10,
    },
    errorTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "black",

    }
});
