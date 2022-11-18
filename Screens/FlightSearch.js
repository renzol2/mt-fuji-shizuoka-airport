import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "expo-status-bar";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";

const Tab = createMaterialTopTabNavigator();

export default function FlightSearch() {
    return (
        <SafeAreaView style={{ height: "100%" }}>
            <StatusBar />
            <AppBar />
            <Tab.Navigator>
                <Tab.Screen
                    name="By Flight #"
                    component={FlightSearchByNumScreen}
                />
                <Tab.Screen
                    name="By Location"
                    component={FlightSearchByLocScreen}
                />
            </Tab.Navigator>
        </SafeAreaView>
    );
}

function FlightSearchByNumScreen() {
    const navigation = useNavigation();
    const [flightNum, setFlightNum] = React.useState("");
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                value={flightNum}
                onChangeText={(text) => setFlightNum(text)}
                placeholder="Flight number"
                placeholderTextColor="grey"
            />
            <Button
                style={styles.findFlightButton}
                mode="contained"
                onPress={() => {
                    navigation.navigate("FlightMatches", {
                        number: flightNum,
                    });
                }}
            >
                Find flight!
            </Button>
        </SafeAreaView>
    );
}

function FlightSearchByLocScreen() {
    const navigation = useNavigation();
    const [departure, setDeparture] = React.useState(null);
    const [arrival, setArrival] = React.useState(null);
    const [date, setDate] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                value={departure}
                onChangeText={(text) => setDeparture(text)}
                placeholder="Departure"
                placeholderTextColor="grey"
            />
            <TextInput
                style={styles.input}
                value={arrival}
                onChangeText={(text) => setArrival(text)}
                placeholder="Arrival"
                placeholderTextColor="grey"
            />
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={(text) => setDate(text)}
                placeholder="Flight Date"
                placeholderTextColor="grey"
            />
            <Button
                style={styles.findFlightButton}
                mode="contained"
                onPress={() => {
                    navigation.navigate("FlightMatches", {
                        departure: departure,
                        arrival: arrival,
                        date: date,
                    });
                }}
            >
                Find flight!
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox),
        alignItems: "center",
    },

    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginTop: 20,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignSelf: "stretch",
        borderColor: "white",
        color: "white",
    },

    findFlightButton: {
        marginTop: 25,
        paddingVertical: 5,
        width: 200,
    },
});
