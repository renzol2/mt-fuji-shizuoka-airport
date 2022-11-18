import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import { SHOPS } from "../data/shops";
import { colorScheme } from "../Styles";
import ShopCard from "./ShopCard";

/**
 * Displays shops at `gate`, or all shops if gate is
 * `undefined` or cannot be found in the shop amenity data
 * @param {{ gate: string, pinnedAmenities: Array, setPinnedAmenities: React.SetStateAction }}
 */
function ShopsList({ gate, pinnedAmenities, setPinnedAmenities }) {
    if (SHOPS[gate] === undefined) {
        // Display all shops
        const shopsArray = Object.keys(SHOPS)
            .map((gate) => SHOPS[gate])
            .flatMap((s) => s);
        return (
            <View>
                {shopsArray.map(({ name, hours, gate }) => (
                    <ShopCard
                        key={name}
                        name={name}
                        hours={hours}
                        gate={gate}
                        pinnedAmenities={pinnedAmenities}
                        setPinnedAmenities={setPinnedAmenities}
                    />
                ))}
            </View>
        );
    } else {
        // Display shops at specific gate
        return (
            <View>
                {SHOPS[gate].length === 0 && (
                    <Text style={styles.bodyText}>No shops at {gate}.</Text>
                )}
                {SHOPS[gate].map(({ name, hours, gate }) => (
                    <ShopCard
                        key={name}
                        name={name}
                        hours={hours}
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

export default ShopsList;
