import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, IconButton, Surface, Text } from "react-native-paper";
import { colorScheme } from "../Styles";

/**
 * Renders basic flight information
 * @param {{
 *  number: string,
 *  departure: string,
 *  arrival: string,
 *  date: string,
 *  time: string,
 *  gate: string
 * }}
 */
export default function FlightCard({
    number,
    departure,
    arrival,
    date,
    time,
    gate
}) {
    const BUTTON_SIZE = 24;
    return (
        <Surface
            style={styles.flightSurface}
        >
            <View style={{ width: 300 }}>
                <Text style={styles.flightNum}>{`Flight ${number}`</Text>
                <Text style={styles.airport}>{`${departure} to ${arrival}`}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.time}>{time}</Text>
                <Text style={styles.gate}>{`Gate: ${gate}`}</Text>
            </View>

            <View>
                <IconButton
                    style={styles.pinButton}
                    icon={isPinned ? "pin" : "pin-outline"}
                    iconColor={Colors.purple100}
                    size={BUTTON_SIZE}
                    onPress={() => {
                        
                    }}
                />
            </View>
        </Surface>
    );
}

const styles = StyleSheet.create({
    flightSurface: {
        marginVertical: 10,
        padding: 20,
        elevation: 4,
        textAlign: "left",
        backgroundColor: colorScheme.light,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    flightNum: {
        fontSize: 23,
        fontWeight: "bold",
    },
    airport: {
        fontSize: 18,
        fontWeight: "200",
    },
    date: {
        fontSize: 18,
        fontWeight: "200",
    },
    time: {
        fontSize: 18,
        fontWeight: "200",
    },
    pinButton: {
        alignSelf: "flex-end",
    },
});
