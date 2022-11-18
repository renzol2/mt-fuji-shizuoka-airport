import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { IconButton, Surface } from "react-native-paper";
import AppBar from "../Components/AppBar";
import { colorScheme } from "../Styles";

/**
 * Screen to view pinned amenities
 * @param {{ pinnedAmenities: Array, setPinnedAmenities: React.SetStateAction }}
 */
export default function PinsScreen({ pinnedAmenities, setPinnedAmenities }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppBar />
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={styles.header}>Pinned Amenities</Text>
                    {pinnedAmenities.length === 0 && (
                        <Text style={styles.bodyText}>
                            There are currently no pinned amenities. Pin some
                            amenities to easily access them here!
                        </Text>
                    )}
                    {pinnedAmenities.map(({ name, gate, type }) => (
                        <Surface
                            key={name}
                            style={styles.amenitySurface}
                        >
                            <Text style={styles.amenityName}>{name}</Text>
                            <Text
                                style={styles.amenityGate}
                            >{`Gate: ${gate}`}</Text>
                            <Text
                                style={styles.amenityType}
                            >{`Type: ${type}`}</Text>
                        </Surface>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorScheme.backgroundPage,
        flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
    },
    amenitySurface: {
        width: 350,
        marginVertical: 10,
        padding: 20,
        elevation: 4,
        textAlign: "left",
        backgroundColor: colorScheme.light,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginTop: 20,
    },
    bodyText: {
        color: "white",
        fontSize: 16,
        marginHorizontal: 50,
        alignSelf: "center",
    },
    amenityType: {
        fontSize: 18,
    },
    amenityName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    amenityGate: {
        fontSize: 19,
    },
});
