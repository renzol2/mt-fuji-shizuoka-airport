import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Colors, IconButton, Surface } from "react-native-paper";
import AppBar from "../Components/AppBar";
import { AMENITY_TYPES } from "../data/amenityTypes";
import { colorScheme } from "../Styles";

/**
 * Screen to view pinned amenities
 * @param {{ pinnedAmenities: Array, setPinnedAmenities: React.SetStateAction }}
 */
export default function PinsScreen({ pinnedAmenities, setPinnedAmenities }) {
    const BUTTON_SIZE = 24;
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={styles.header}>Pinned Amenities</Text>
                    {pinnedAmenities.length === 0 && (
                        <Text style={styles.bodyText}>
                            There are currently no pinned amenities. Pin some
                            amenities to easily access them here!
                        </Text>
                    )}
                    {pinnedAmenities.map(({ name, gate, type }) => {
                        const isPinned = pinnedAmenities.some(
                            (amenity) =>
                                name === amenity.name && gate === amenity.gate
                        );
                        return (
                            <Surface
                                key={name}
                                style={styles.amenitySurface}
                            >
                                <View>
                                    <Text style={styles.amenityName}>
                                        {name}
                                    </Text>
                                    <Text
                                        style={styles.amenityGate}
                                    >{`Gate: ${gate}`}</Text>
                                    <Text
                                        style={styles.amenityType}
                                    >{`Type: ${type}`}</Text>
                                </View>
                                <View>
                                    {/* Pin button */}
                                    <IconButton
                                        style={styles.pinButton}
                                        icon={isPinned ? "pin" : "pin-outline"}
                                        iconColor={Colors.purple100}
                                        size={BUTTON_SIZE}
                                        onPress={() => {
                                            console.log("Pin this restaurant!");
                                            if (isPinned) {
                                                // if the restaurant is pinned, unpin the restaurant,
                                                // i.e. set pinned amenities to all pinned amenities that do not match the current restaurant
                                                setPinnedAmenities(
                                                    pinnedAmenities.filter(
                                                        (amenity) =>
                                                            !(
                                                                name ===
                                                                    amenity.name &&
                                                                gate ===
                                                                    amenity.gate
                                                            )
                                                    )
                                                );
                                            } else {
                                                // if the restaurant is unpinned, pin the restaurant
                                                setPinnedAmenities([
                                                    ...pinnedAmenities,
                                                    {
                                                        name,
                                                        gate,
                                                        type: AMENITY_TYPES.DINING,
                                                    },
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
                                        onPress={() =>
                                            console.log("yay crowdsouricng!")
                                        }
                                    />
                                </View>
                            </Surface>
                        );
                    })}
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
    amenitySurface: {
        width: 330,
        minWidth: 350,
        marginVertical: 10,
        padding: 20,
        elevation: 4,
        textAlign: "left",
        backgroundColor: colorScheme.light,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "gray",
        marginTop: 20,
    },
    bodyText: {
        color: "gray",
        fontSize: 16,
        marginHorizontal: 50,
        alignSelf: "center",
    },
    amenityType: {
        fontSize: 18,
    },
    amenityName: {
        fontSize: 20,
        fontWeight: "bold",
        width: 200,
    },
    amenityGate: {
        fontSize: 19,
    },
});
