import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";

/**
 * Displays shops at `gate`, or all shops if gate is
 * `undefined` or cannot be found in the shop amenity data
 * @param {{ gate: string }}
 */
function ShopsList({ gate }) {
    // Number where 0 = Monday, 1 = Tuesday, ... 6 = Sunday
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    return (
        <View>
            <Text style={{ color: 'white' }}>TODO: display shop amenities here</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ShopsList;
