import { StyleSheet, View } from "react-native";
import { Colors, IconButton, Surface, Text } from "react-native-paper";
import { RESTAURANTS } from "../data/restaurants";

/**
 * Displays restaurants at `gate`, or all restaurants if gate is
 * `undefined` or cannot be found in the restaurant data
 * @param {{ gate: string, pinnedAmenities: Array, setPinnedAmenities: React.SetStateAction }}
 */
function RestaurantsList({ gate, pinnedAmenities, setPinnedAmenities }) {
    // Number where 0 = Monday, 1 = Tuesday, ... 6 = Sunday
    const currentDayIndex = (new Date().getDay() + 6) % 7;

    if (RESTAURANTS[gate] === undefined) {
        // Display all restaurants
        return (
            <View>
                <Surface style={styles.restaurantSurface}>
                    <Text>TODO: display all restaurants here</Text>
                </Surface>
            </View>
        );
    } else {
        // Display restaurants at specific gate
        return (
            <View>
                {RESTAURANTS[gate].map(({ name, hours, priceRange, gate }) => {
                    const currentHours = hours[currentDayIndex];
                    const { day, openingTime, closingTime } = currentHours;
                    const isPinned = pinnedAmenities.some((amenity) => name === amenity.name);
                    return (
                        <Surface
                            style={styles.restaurantSurface}
                            key={name}
                        >
                            <View>
                                {/* Name of restaurant */}
                                <Text style={styles.restaurantName}>
                                    {name}
                                </Text>

                                {/* Hours */}
                                <Text style={styles.restaurantHours}>
                                    {`Hours (${day}): ${openingTime} - ${closingTime}`}
                                </Text>

                                {/* Price range */}
                                <Text style={styles.restaurantPriceRange}>
                                    {`Price range: ${priceRange}`}
                                </Text>
                            </View>

                            {/* Pin button */}
                            <IconButton
                                style={styles.pinButton}
                                icon={isPinned ? "pin" : "pin-outline"}
                                iconColor={Colors.purple100}
                                size={20}
                                onPress={() => {
                                    console.log("Pin this restaurant!");
                                    if (isPinned) {
                                        // if the restaurant is pinned, unpin the restaurant
                                        setPinnedAmenities(pinnedAmenities.filter((amenity) => name !== amenity.name));
                                    } else {
                                        // if the restaurant is unpinned, pin the restaurant
                                        setPinnedAmenities([...pinnedAmenities, { name, hours, priceRange, gate }]);
                                    }
                                }}
                            />

                            {/* Crowdsource button */}
                            <IconButton
                                style={styles.pinButton}
                                icon="car"
                                iconColor={Colors.purple100}
                                size={20}
                                onPress={() =>
                                    console.log("yay crowdsouricng!")
                                }
                            />
                        </Surface>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    restaurantSurface: {
        marginVertical: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        textAlign: "left",
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    restaurantHours: {
        fontSize: 15,
        fontWeight: "200",
    },
    restaurantPriceRange: {
        fontSize: 14,
    },
    pinButton: {
        alignSelf: "flex-end",
    },
});

export default RestaurantsList;
