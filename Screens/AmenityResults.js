import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native-paper";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";
import { AMENITY_TYPES } from "../data/amenityTypes";
import RestaurantsList from "../Components/RestaurantsList";
import LoungesList from "../Components/LoungesList";
import MedicalAmenitiesList from "../Components/MedicalAmenitiesList";
import RestroomsList from "../Components/RestroomsList";
import ShopsList from "../Components/ShopsList";
import { UNSELECTED_GATE_NAME } from "../data/gates";

/**
 * Displays the search results for amenities. Takes a `gateName` and `amenityType`
 * through route parameters by `react-navigation`.
 * 
 * See: https://reactnavigation.org/docs/params
 */
export default function AmenityResults({ route, pinnedAmenities, setPinnedAmenities }) {
    const { gateName, amenityType } = route.params;
    //console.log('pinned amenities: ', pinnedAmenities, setPinnedAmenities);

    // Dictionary object mapping `amenityType` to a list component of amenities
    const amenityTypeToList = {
        [AMENITY_TYPES.DINING]: RestaurantsList,
        [AMENITY_TYPES.LOUNGES]: LoungesList,
        [AMENITY_TYPES.MEDICAL]: MedicalAmenitiesList,
        [AMENITY_TYPES.RESTROOMS]: RestroomsList,
        [AMENITY_TYPES.SHOPS]: ShopsList,
    };

    // Component chosen to display appropriate amenity
    const AmenityList = amenityTypeToList[amenityType];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <ScrollView>
                {/* Header */}
                {/* 
                    Displays 'Amenities' when no gate is selected, and
                    displays 'Amenities at gate ___' when some gate is selected
                */}
                <Text style={styles.header}>{`Amenities ${gateName === UNSELECTED_GATE_NAME
                    ? ""
                    : "at gate " + gateName
                    }`}</Text>

                {/* Amenity type */}
                <Text style={styles.amenityType}>{amenityType}</Text>

                {/* List of amenity components */}
                <AmenityList gate={gateName} pinnedAmenities={pinnedAmenities} setPinnedAmenities={setPinnedAmenities} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginTop: 20,
    },
    amenityType: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginVertical: 20,
    },
});
