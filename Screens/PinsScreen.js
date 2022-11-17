import * as React from "react";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";

/**
 * Screen to view pinned amenities
 * @param {{ pinnedFlight: import("../data/flight").Flight, setPinnedFlight: React.SetStateAction<import("../data/flight").Flight | undefined> }}
 */
export default function PinsScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Pins Screen</Text>
        </View>
    );
}
