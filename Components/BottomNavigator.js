import { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeNavigator from "./HomeNavigator";
import PinsScreen from "../Screens/PinsScreen";
import SearchScreen from "../Screens/SearchScreen";
import { colorScheme } from "../Styles";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
    const [pinnedFlight, setPinnedFlight] = useState(undefined);
    const [pinnedAmenities, setPinnedAmenities] = useState([]);

    return (
        <Tab.Navigator barStyle={{ backgroundColor: colorScheme.primary }}>
            <Tab.Screen
                name="Home"
                children={() => (
                    <HomeNavigator
                        pinnedFlight={pinnedFlight}
                        setPinnedFlight={setPinnedFlight}
                        pinnedAmenities={pinnedAmenities}
                        setPinnedAmenities={setPinnedAmenities}
                    />
                )}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="magnify"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Pins"
                children={() => (
                    <PinsScreen
                        pinnedAmenities={pinnedAmenities}
                        setPinnedAmenities={setPinnedAmenities}
                    />
                )}
                options={{
                    tabBarLabel: "Pins",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="pin"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
