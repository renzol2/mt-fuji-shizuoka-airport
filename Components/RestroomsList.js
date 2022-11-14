import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";

/**
 * Displays restrooms at `gate`, or all restrooms if gate is
 * `undefined` or cannot be found in the restroom data
 * @param {{ gate: string }}
 */
function RestroomsList({ gate }) {
    // Number where 0 = Monday, 1 = Tuesday, ... 6 = Sunday
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    return (
        <View>
            <Text style={{ color: 'white' }}>TODO: display restrooms here</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default RestroomsList;
