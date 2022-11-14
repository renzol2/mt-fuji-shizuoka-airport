import { StyleSheet, View } from "react-native";
import { Colors, IconButton, Surface, Text } from "react-native-paper";
import { RESTAURANTS } from "../data/restaurants";

/**
 * Displays restaurants at `gate`, or all restaurants if gate is
 * `undefined` or cannot be found in the restaurant data
 * @param {{ gate: string }}
 */
function RestaurantsList({ gate }) {
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
                {RESTAURANTS[gate].map(({ name, hours, priceRange }) => {
                    const currentHours = hours[currentDayIndex];
                    const { day, openingTime, closingTime } = currentHours;
                    return (
                        <Surface
                            style={styles.restaurantSurface}
                            key={name}
                        >
                            <View>
                                <Text style={styles.restaurantName}>
                                    {name}
                                </Text>
                                <Text style={styles.restaurantHours}>
                                    {`Hours (${day}): ${openingTime} - ${closingTime}`}
                                </Text>
                                <Text style={styles.restaurantPriceRange}>
                                    {`Price range: ${priceRange}`}
                                </Text>
                            </View>
                            <IconButton
                                style={styles.pinButton}
                                icon="pin"
                                iconColor={Colors.purple100}
                                size={20}
                                onPress={() =>
                                    console.log("Pin this restaurant!")
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
