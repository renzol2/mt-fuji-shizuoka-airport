import * as React from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";
import { Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "expo-status-bar";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";
import DateTimePicker from "@react-native-community/datetimepicker";

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
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);

    const onChange = (event, selectedDate) => {
        if (Platform.OS === 'android') {
            setShow(false);
            setDate(selectedDate);
        }
        if (event.type === 'dismissed') {
            return;
        }
    }

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

            <Pressable
                style={styles.input}
                onPress={() => {setShow(true)}}
            >
                <View pointerEvents="none">
                    <TextInput
                        mode="contained"
                        placeholder={"Date: " + date.toDateString()}
                        editable={false}
                    >
                    </TextInput>
                </View>
            </Pressable>

            {show && <DateTimePicker
                testID="dateTimePicker"
                value={date}
                onChange={onChange}
                placeholderText="Select Date"
            />}

            <Button
                style={styles.findFlightButton}
                mode="contained"
                onPress={() => {
                    navigation.navigate("FlightMatches", {
                        departure: departure,
                        arrival: arrival,
                        date: date.toDateString(),
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
        alignItems: "center"
    },

    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
        marginTop: 20
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignSelf: "stretch",
        borderColor: colorScheme.dark,
        color: "black"
    },

    dateButton: {
        marginTop: 25,
        paddingVertical: 5,
        borderColor: colorScheme.dark,
        backgroundColor: colorScheme.backgroundPage,
        borderRadius: 0,
        alignItems: "left"
    },

    findFlightButton: {
        marginTop: 25,
        paddingVertical: 5,
        width: 200,
        backgroundColor: colorScheme.primary,
        borderRadius: 30
    }
});
