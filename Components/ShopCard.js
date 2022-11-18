import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, IconButton, Surface, Text } from "react-native-paper";
import { AMENITY_TYPES } from "../data/amenityTypes";
import { colorScheme } from "../Styles";

/**
 * Renders basic shop information
 * @param {{
 *  name: string,
 *  hours: Array<import("../data/shops").Hours>,
 *  gate: string,
 *  pinnedAmenities: Array,
 *  setPinnedAmenities: React.SetStateAction
 * }}
 */
export default function ShopCard({
    name,
    hours,
    gate,
    pinnedAmenities,
    setPinnedAmenities,
}) {
    const BUTTON_SIZE = 24;
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    const currentHours = hours[currentDayIndex];
    const { day, openingTime, closingTime } = currentHours;
    const isPinned = pinnedAmenities.some((amenity) => name === amenity.name);
    return (
        <Surface
            style={styles.shopSurface}
            key={name}
        >
            {/* shop information */}
            <View style={{ width: 300 }}>
                {/* Name of shop */}
                <Text style={styles.shopName}>{name}</Text>

                {/* Hours */}
                <Text style={styles.shopHours}>
                    {`Hours (${day}): ${openingTime} - ${closingTime}`}
                </Text>

                {/* Gate */}
                <Text style={styles.shopGate}>{`Gate: ${gate}`}</Text>
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
                        console.log("Pin this shop!");
                        if (isPinned) {
                            // if the shop is pinned, unpin the shop
                            setPinnedAmenities(
                                pinnedAmenities.filter(
                                    (amenity) =>
                                        !(
                                            name === amenity.name &&
                                            gate === amenity.gate &&
                                            AMENITY_TYPES.SHOPS === amenity.type
                                        )
                                )
                            );
                        } else {
                            // if the shop is unpinned, pin the shop
                            setPinnedAmenities([
                                ...pinnedAmenities,
                                { name, gate, type: AMENITY_TYPES.SHOPS },
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
    shopSurface: {
        marginVertical: 10,
        padding: 20,
        elevation: 4,
        textAlign: "left",
        backgroundColor: colorScheme.light,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    shopName: {
        fontSize: 23,
        fontWeight: "bold",
    },
    shopHours: {
        fontSize: 18,
        fontWeight: "200",
    },
    pinButton: {
        alignSelf: "flex-end",
    },
    shopGate: {
        fontSize: 19,
        fontWeight: "bold",
    },
});
