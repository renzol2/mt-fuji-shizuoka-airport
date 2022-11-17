import HomeScreen from "../Screens/HomeScreen";
import AmenityFinder from "../Screens/AmenityFinder";
import AmenityResults from "../Screens/AmenityResults";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/**
 * Navigator for all screens under the Home tab
 * @param {{ pinnedFlight: import("../data/flight").Flight, setPinnedFlight: React.SetStateAction, pinnedAmenities: Array, setPinnedAmenities: React.SetStateAction }}
 */
function HomeNavigator({
    pinnedFlight,
    setPinnedFlight,
    pinnedAmenities,
    setPinnedAmenities,
}) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                children={() => (
                    <HomeScreen
                        pinnedFlight={pinnedFlight}
                        setPinnedFlight={setPinnedFlight}
                    />
                )}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AmenityFinder"
                component={AmenityFinder}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="AmenityResults"
                children={({ route }) => (
                    <AmenityResults
                        route={route}
                        pinnedAmenities={pinnedAmenities}
                        setPinnedAmenities={setPinnedAmenities}
                    />
                )}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigator;
