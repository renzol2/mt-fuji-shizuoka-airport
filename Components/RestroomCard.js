import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, IconButton, Surface, Text } from "react-native-paper";
import { colorScheme } from "../Styles";

/**
 * Renders basic restroom information
 * @param {{
 *  name: string,
 *  gate: string,
 *  hasBabyStation: boolean,
 *  pinnedAmenities: Array,
 *  setPinnedAmenities: React.SetStateAction
 * }}
 */
export default function RestroomCard({
    name,
    gate,
    hasBabyStation,
    pinnedAmenities,
    setPinnedAmenities,
}) {
    const BUTTON_SIZE = 24;
    const isPinned = pinnedAmenities.some((amenity) => name === amenity.name);
    return (
        <Surface
            style={styles.restroomSurface}
            key={name}
        >
            {/* Restroom information */}
            <View style={{ width: 300 }}>
                {/* Name of restroom */}
                <Text style={styles.restroomName}>{name}</Text>

                {/* Baby station text */}
                <Text style={styles.restroomBabyChangingStationText}>{'Baby changing station: ' + ( hasBabyStation ? 'Available' : 'Unavailable' )}</Text>
            </View>

            {/* Buttons */}
            <View>
                {/* Pin button */}
                <IconButton
                    style={styles.pinButton}
                    icon={isPinned ? "pin" : "pin-outline"}
                    iconColor={Colors.purple100}
                    size={BUTTON_SIZE}
                    onPress={() => {
                        console.log("Pin this restroom!");
                        if (isPinned) {
                            // if the restroom is pinned, unpin the restroom
                            setPinnedAmenities(
                                pinnedAmenities.filter(
                                    (amenity) => name !== amenity.name
                                )
                            );
                        } else {
                            // if the restroom is unpinned, pin the restroom
                            setPinnedAmenities([
                                ...pinnedAmenities,
                                { name, gate, hasBabyStation },
                            ]);
                        }
                    }}
                />

                {/* Crowdsource button */}
                <IconButton
                    style={styles.pinButton}
                    icon="lightbulb"
                    iconColor={Colors.purple100}
                    size={BUTTON_SIZE}
                    onPress={() => console.log("yay crowdsouricng!")}
                />
            </View>
        </Surface>
    );
}

const styles = StyleSheet.create({
    restroomSurface: {
        marginVertical: 10,
        padding: 20,
        elevation: 4,
        textAlign: "left",
        backgroundColor: colorScheme.light,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    restroomName: {
        fontSize: 23,
        fontWeight: "bold",
    },
    restroomBabyChangingStationText: {
        fontSize: 17,
    },
    pinButton: {
        alignSelf: "flex-end",
    },
    restroomGate: {
        fontSize: 19,
        fontWeight: "bold",
    },
});
