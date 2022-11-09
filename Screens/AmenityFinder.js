import { StyleSheet, Text, View } from "react-native";
import {
    Button,
    Card,
    Title,
    Paragraph,
    Surface,
    Appbar,
} from "react-native-paper";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";

export default function AmenityFinder() {
    return (
        <View style={{ backgroundColor: colorScheme.backgroundPage, flex: 1 }}>
            <Appbar />
            <Text style={{ color: 'white' }}>Choose your amenity type</Text>
            <Text style={{ color: 'white' }}>Food</Text>
            <Text style={{ color: 'white' }}>Bathrooms</Text>
        </View>
    );
}
