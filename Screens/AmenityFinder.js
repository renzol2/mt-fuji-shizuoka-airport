import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Snackbar } from "react-native-paper";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";
import GatePicker from "../Components/GatePicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { AMENITY_TYPES } from "../data/amenityTypes";
import { UNSELECTED_GATE_NAME } from "../data/gates";

/**
 * The Amenity Finder screen allows the user to select a gate
 * and type of amenity to search for. This screen will then redirect
 * them to the AmenityResults screen with the chosen filters.
 */
export default function AmenityFinder() {
    const [showSnackbar, setShowSnackbar] = React.useState(false);
    const [gateName, setGateName] = React.useState(UNSELECTED_GATE_NAME);
    const navigation = useNavigation();

    // These objects are mapped to buttons.
    // We can add another object to the array to add more amenity types
    const AMENITY_TYPE_BUTTONS = [
        { type: AMENITY_TYPES.DINING, buttonTitle: "Dining", disabled: false },
        {
            type: AMENITY_TYPES.RESTROOMS,
            buttonTitle: "Restrooms",
            disabled: false,
        },
        { type: AMENITY_TYPES.SHOPS, buttonTitle: "Shops", disabled: false },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.imageBackround}
                source={require("../images/airportgate.jpg")}
                resizeMode="cover"
            >
                <StatusBar />
                <AppBar />

                {/* Gate picker component */}
                <GatePicker
                    gateName={gateName}
                    setGateName={setGateName}
                    isUnselected={gateName === UNSELECTED_GATE_NAME}
                    showSnackbar={showSnackbar}
                    setShowSnackbar={setShowSnackbar}
                />

                {/* List of all amenity type buttons */}
                <View style={styles.amenityTypeButtonContainer}>
                    {AMENITY_TYPE_BUTTONS.map(
                        ({ type, buttonTitle, disabled }) => (
                            <Button
                                style={styles.amenityTypeButton}
                                mode="contained"
                                disabled={disabled}
                                onPress={() => {
                                    navigation.navigate("AmenityResults", {
                                        gateName: gateName,
                                        amenityType: type,
                                    });
                                }}
                                key={type}
                            >
                                {buttonTitle}
                            </Button>
                        )
                    )}
                </View>

                <Snackbar
                    visible={showSnackbar}
                    onDismiss={() => setShowSnackbar(false)}
                >
                    Gate selection is now gate {gateName}
                </Snackbar>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },
    imageBackround: {
        flex: 1,
    },

    amenityTypeButtonContainer: {
        paddingHorizontal: 50,
    },

    amenityTypeButton: {
        marginTop: 25,
        paddingVertical: 5,
        backgroundColor: colorScheme.primary,
        borderRadius: 30,
    },

    selectedAmenityButton: {
        marginTop: 25,
        paddingVertical: 5,
        backgroundColor: colorScheme.light,
    },

    findAmenitiesButton: {
        marginTop: 25,
        paddingVertical: 5,
    },
});
