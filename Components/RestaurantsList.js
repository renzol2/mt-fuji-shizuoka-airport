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
    if (RESTAURANTS[gate] === undefined) {
        // Display all restaurants
        const restaurantsArray = Object.keys(RESTAURANTS)
            .map((gate) => RESTAURANTS[gate])
            .flatMap((r) => r);
        return (
            <View>
                {restaurantsArray.map(({ name, hours, priceRange, gate }) => (
                    <RestaurantCard
                        key={name}
                        name={name}
                        hours={hours}
                        priceRange={priceRange}
                        gate={gate}
                        pinnedAmenities={pinnedAmenities}
                        setPinnedAmenities={setPinnedAmenities}
                    />
                ))}
            </View>
        );
    } else {
        // Display restaurants at specific gate
        return (
            <View>
                {RESTAURANTS[gate].length === 0 && (
                    <Text style={styles.bodyText}>No restaurants at {gate}.</Text>
                )}
                {RESTAURANTS[gate].map(({ name, hours, priceRange, gate }) => (
                    <RestaurantCard
                        key={name}
                        name={name}
                        hours={hours}
                        priceRange={priceRange}
                        gate={gate}
                        pinnedAmenities={pinnedAmenities}
                        setPinnedAmenities={setPinnedAmenities}
                    />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyText: {
        color: "white",
        fontSize: 16,
        marginHorizontal: 50,
        alignSelf: "center",
    },
});

export default RestaurantsList;
