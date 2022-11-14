import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";

/**
 * Displays medical amenities at `gate`, or all medical amenities if gate is
 * `undefined` or cannot be found in the medical amenity data
 * @param {{ gate: string }}
 */
function MedicalAmenitiesList({ gate }) {
    // Number where 0 = Monday, 1 = Tuesday, ... 6 = Sunday
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    return (
        <View>
            <Text style={{ color: 'white' }}>TODO: display medical amenities here</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default MedicalAmenitiesList;
