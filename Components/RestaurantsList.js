import { StyleSheet, View } from "react-native";
import { Colors, IconButton, Surface, Text } from "react-native-paper";
import { RESTAURANTS } from "../data/restaurants";
import RestaurantCard from "./RestaurantCard";

/**
 * Displays restaurants at `gate`, or all restaurants if gate is
 * `undefined` or cannot be found in the restaurant data
 * @param {{ gate: string, pinnedAmenities: Array, setPinnedAmenities: React.SetStateAction }}
 */
function RestaurantsList({ gate, pinnedAmenities, setPinnedAmenities }) {
    // Number where 0 = Monday, 1 = Tuesday, ... 6 = Sunday

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
                    return (
                        <RestaurantCard
                            key={name}
                            name={name}
                            hours={hours}
                            priceRange={priceRange}
                            gate={gate}
                            pinnedAmenities={pinnedAmenities}
                            setPinnedAmenities={setPinnedAmenities}
                        />
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
