import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import { RESTROOMS } from "../data/restrooms";
import { colorScheme } from "../Styles";


/**
 * Displays restrooms at `gate`, or all restrooms if gate is
 * `undefined` or cannot be found in the restroom data
 * @param {{ gate: string, pinnedAmenities: Array, setPinnedAmenities: React.SetStateAction }}
 */
function RestroomsList({ gate, pinnedAmenities, setPinnedAmenities }) {

    if (RESTROOMS[gate] === undefined) {
        return (
            <View>
                <Surface style={styles.restroomSurface}>
                    <Text>TODO: display all bathrooms here</Text>
                </Surface>
            </View>
        );
    } else {
        return (
            <View>
                {RESTROOMS[gate].map(({ hasBabyStation }) => {

                    return (
                        <Surface style={styles.restroomSurface}>
                            <Text>Bathroom</Text>
                        </Surface>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
