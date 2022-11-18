import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import { RESTROOMS } from "../data/restrooms";
import { colorScheme } from "../Styles";
import RestroomCard from "./RestroomCard";

/**
 * Displays restrooms at `gate`, or all restrooms if gate is
 * `undefined` or cannot be found in the restroom data
 * @param {{ gate: string, pinnedAmenities: Array, setPinnedAmenities: React.SetStateAction }}
 */
function RestroomsList({ gate, pinnedAmenities, setPinnedAmenities }) {
    if (RESTROOMS[gate] === undefined) {
        // Display all restrooms
        const restroomsArray = Object.keys(RESTROOMS)
            .map((gate) => RESTROOMS[gate])
            .flatMap((r) => r);
        return (
            <View>
                {restroomsArray.map(({ name, gate, hasBabyStation }) => (
                    <RestroomCard
                        name={name}
                        gate={gate}
                        hasBabyStation={hasBabyStation}
                        pinnedAmenities={pinnedAmenities}
                        setPinnedAmenities={setPinnedAmenities}
                        key={name}
                    />
                ))}
            </View>
        );
    } else {
        return (
            <View>
                {RESTROOMS[gate].length === 0 && (
                    <Text style={styles.bodyText}>No restrooms at {gate}.</Text>
                )}
                {RESTROOMS[gate].map(({ name, gate, hasBabyStation }) => (
                    <RestroomCard
                        name={name}
                        gate={gate}
                        hasBabyStation={hasBabyStation}
                        pinnedAmenities={pinnedAmenities}
                        setPinnedAmenities={setPinnedAmenities}
                        key={name}
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
    restroomSurface: {
        marginVertical: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        backgroundColor: colorScheme.light,
    },
    pinButton: {
        alignSelf: "flex-end",
    },
});

export default RestroomsList;
