import * as React from "react";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";

/**
 * Screen to view pinned amenities
 * @param {{ pinnedFlight: import("../data/flight").Flight, setPinnedFlight: React.SetStateAction<import("../data/flight").Flight | undefined> }}
 */
export default function PinsScreen({ pinnedFlight, setPinnedFlight }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Pins Screen</Text>
            <IconButton
                icon="pin"
                size={50}
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
            />
            <Text>{pinnedFlight !== undefined ? "Pinned" : "Not pinned"}</Text>
        </View>
    );
}
