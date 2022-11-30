import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Colors, IconButton, Surface } from "react-native-paper";
import AppBar from "../Components/AppBar";
import RestaurantCard from "../Components/RestaurantCard";
import RestroomCard from "../Components/RestroomCard";
import ShopCard from "../Components/ShopCard";
import { AMENITY_TYPES } from "../data/amenityTypes";
import { RESTAURANTS } from "../data/restaurants";
import { RESTROOMS } from "../data/restrooms";
import { SHOPS } from "../data/shops";
import { colorScheme } from "../Styles";

/**
 * Screen to view pinned amenities
 * @param {{ pinnedAmenities: Array, setPinnedAmenities: React.SetStateAction }}
 */
export default function PinsScreen({ pinnedAmenities, setPinnedAmenities }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar useBackButton={false} />
            <ScrollView>
                <View
                    style={{
                        flex: 1,
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
                    {/* List of pinned amenities */}
                    {pinnedAmenities.map(({ name, gate, type }) => {
                        const getAmenityInfo = (name, gate, type) => {
                            // Get the mock data object based on amenity type
                            let amenityDatabase;
                            if (type === AMENITY_TYPES.DINING) {
                                amenityDatabase = RESTAURANTS;
                            } else if (type === AMENITY_TYPES.SHOPS) {
                                amenityDatabase = SHOPS;
                            } else {
                                amenityDatabase = RESTROOMS;
                            }
                            const amenityData = amenityDatabase[gate].find(
                                (amenity) => amenity.name === name
                            );
                            return amenityData;
                        };
                        const amenityData = getAmenityInfo(name, gate, type);
                        if (type === AMENITY_TYPES.DINING) {
                            return (
                                <RestaurantCard
                                    name={name}
                                    hours={amenityData.hours}
                                    description={amenityData.description}
                                    gate={gate}
                                    pinnedAmenities={pinnedAmenities}
                                    setPinnedAmenities={setPinnedAmenities}
                                    priceRange={amenityData.priceRange}
                                    key={name}
                                />
                            );
                        } else if (type === AMENITY_TYPES.SHOPS) {
                            return (
                                <ShopCard
                                    name={name}
                                    hours={amenityData.hours}
                                    gate={gate}
                                    pinnedAmenities={pinnedAmenities}
                                    setPinnedAmenities={setPinnedAmenities}
                                    key={name}
                                />
                            );
                        } else {
                            return (
                                <RestroomCard
                                    name={name}
                                    hasBabyStation={amenityData.hasBabyStation}
                                    gate={gate}
                                    pinnedAmenities={pinnedAmenities}
                                    setPinnedAmenities={setPinnedAmenities}
                                    key={name}
                                />
                            );
                        }
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
