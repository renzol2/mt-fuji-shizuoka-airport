import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";

/**
 * Displays lounges at `gate`, or all lounges if gate is
 * `undefined` or cannot be found in the lounge data
 * @param {{ gate: string }}
 */
function LoungesList({ gate }) {
    // Number where 0 = Monday, 1 = Tuesday, ... 6 = Sunday
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    return (
        <View>
            <Text style={{ color: 'white' }}>TODO: display lounges here</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default LoungesList;
