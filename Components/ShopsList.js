import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import { SHOPS } from "../data/shops";
import { colorScheme } from "../Styles";

/**
 * Displays shops at `gate`, or all shops if gate is
 * `undefined` or cannot be found in the shop amenity data
 * @param {{ gate: string }}
 */
function ShopsList({ gate }) {
    const currentDayIndex = (new Date().getDay() + 6) % 7;

    if (SHOPS[gate] === undefined) {
        return (
            <View>
                <Surface style={styles.shopSurface}>
                    <Text>TODO: display all shops here</Text>
                </Surface>
            </View>
        );
    } else {
        return (
            <View>
                {SHOPS[gate].map(({ name, hours }) => {
                    const currentHours = hours[currentDayIndex];
                    const { day, openingTime, closingTime } = currentHours;


                    return (
                        <Surface
                            style={styles.shopSurface}
                            key={name}
                        >
                            <View>
                                <Text style={styles.shopName}>
                                    {name}
                                </Text>
                                <Text style={styles.shopHours}>
                                    {`Hours (${day}): ${openingTime} - ${closingTime}`}
                                </Text>
                            </View>
                        </Surface>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    shopSurface: {
        marginVertical: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        backgroundColor: colorScheme.light,
    },
    shopName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    shopHours: {
        fontSize: 15,
        fontWeight: "200",
    },
    shopPriceRange: {
        fontSize: 14,
    },
    pinButton: {
        alignSelf: "flex-end",
    },
});

export default ShopsList;
