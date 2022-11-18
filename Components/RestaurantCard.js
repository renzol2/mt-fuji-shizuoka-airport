import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, IconButton, Surface, Text, Dialog, Portal, Paragraph, Button } from "react-native-paper";
import { colorScheme } from "../Styles";

/**
 * Renders basic restaurant information
 * @param {{
 *  name: string,
 *  hours: Array<import("../data/restaurants").Hours>,
 *  priceRange: string,
 *  gate: string,
 *  pinnedAmenities: Array,
 *  setPinnedAmenities: React.SetStateAction
 * }}
 */
export default function RestaurantCard({
    name,
    hours,
    priceRange,
    gate,
    pinnedAmenities,
    setPinnedAmenities,
}) {
    const BUTTON_SIZE = 24;
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    const currentHours = hours[currentDayIndex];
    const { day, openingTime, closingTime } = currentHours;
    const isPinned = pinnedAmenities.some((amenity) => name === amenity.name);

    const [crowdsourcePrompt, setcrowdsourcePrompt] = React.useState(false);
    const showCrowdsourcePrompt = () => setcrowdsourcePrompt(true);
    const hideCrowdsourcePrompt = () => setcrowdsourcePrompt(false);

    const [crowdsourceUpdate, setcrowdsourceUpdate] = React.useState(false);
    const showCrowdsourceUpdate = () => setcrowdsourceUpdate(true);
    const hideCrowdsourceUpdate = () => setcrowdsourceUpdate(false);   

    const [timepicker, setTimepicker] = React.useState(false);
    const showTimepicker = () => setTimepicker(true);
    const hideTimepicker = () => setTimepicker(false);

    /*const [mydate, setDate] = React.useState(new Date());

    const displaymode = React.useState('time');
    const changeSelectedDate = (event, selectedDate) => {
       const currentDate = selectedDate || mydate;
       setDate(currentDate);
       setTimepicker(false)
    }; */
    return (
        <Surface
            style={styles.restaurantSurface}
            key={name}
        >
            {/* Restaurant information */}
            <View style={{ width: 300 }}>
                {/* Name of restaurant */}
                <Text style={styles.restaurantName}>{name}</Text>

                {/* Hours */}
                <Text style={styles.restaurantHours}>
                    {`Hours (${day}): ${openingTime} - ${closingTime}`}
                </Text>

                {/* Price range */}
                <Text style={styles.restaurantPriceRange}>
                    {`Price range: ${priceRange}`}
                </Text>

                {/* Gate */}
                <Text style={styles.restaurantGate}>{`Gate: ${gate}`}</Text>
            </View>

            {/* Buttons */}
            <View>
                {/* Pin button */}
                <IconButton
                    style={styles.pinButton}
                    icon={isPinned ? "pin" : "pin-outline"}
                    iconColor={Colors.purple100}
                    size={BUTTON_SIZE}
                    onPress={() => {
                        console.log("Pin this restaurant!");
                        if (isPinned) {
                            // if the restaurant is pinned, unpin the restaurant
                            setPinnedAmenities(
                                pinnedAmenities.filter(
                                    (amenity) => name !== amenity.name
                                )
                            );
                        } else {
                            // if the restaurant is unpinned, pin the restaurant
                            setPinnedAmenities([
                                ...pinnedAmenities,
                                { name, hours, priceRange, gate },
                            ]);
                        }
                    }}
                />

                {/* Crowdsource button */}
                <IconButton
                    style={styles.pinButton}
                    icon="lightbulb"
                    iconColor={Colors.purple100}
                    size={BUTTON_SIZE}
                    onPress={showCrowdsourcePrompt}
                />
                <Portal>
                    {/* Crowdsource prompt dialog */}
                    <Dialog visible={crowdsourcePrompt} onDismiss={hideCrowdsourcePrompt}>
                        <Dialog.Title>Hours</Dialog.Title>
                        <Dialog.Content>
                        <Paragraph>Is this info correct?</Paragraph>
                        <Paragraph>{`Current Hours: ${openingTime} - ${closingTime}`}</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button onPress={hideCrowdsourcePrompt}>Yes</Button>
                        <Button onPress={showCrowdsourceUpdate}>No</Button>
                        
                        </Dialog.Actions>
                    </Dialog>
                    {/* Crowdsource update dialog */}
                    <Dialog visible={crowdsourceUpdate} onDismiss={hideCrowdsourceUpdate}>
                        <Dialog.Title>Hours</Dialog.Title>
                        <Dialog.Content>
                        <Paragraph>What are the correct hours?</Paragraph>
                        <Button onPress={showTimepicker}>Open: {openingTime}</Button>
                        <Button onPress={showTimepicker}>Close: {closingTime}</Button>
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button onPress={hideCrowdsourceUpdate}>Confirm</Button>
                        <Button onPress={hideCrowdsourceUpdate}>Cancel</Button>
                        
                        </Dialog.Actions>
                    </Dialog>
                    {/* Timepicker dialog */}
                    <Dialog visible={timepicker} onDismiss={hideTimepicker}>
                        <Dialog.Title>Hours</Dialog.Title>
                        <Dialog.Content>
                        <Paragraph>What are the correct hours?</Paragraph>
                        {/* <DateTimePicker
                                value={mydate}
                                mode={'time'}
                                is24Hour={false}
                                display={true}
                                onChange={changeSelectedDate}
                            /> */}
                        </Dialog.Content>
                    </Dialog>
                </Portal>
            </View>
        </Surface>
    );
}

const styles = StyleSheet.create({
    restaurantSurface: {
        marginVertical: 10,
        padding: 20,
        elevation: 4,
        textAlign: "left",
        backgroundColor: colorScheme.light,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    restaurantName: {
        fontSize: 23,
        fontWeight: "bold",
    },
    restaurantHours: {
        fontSize: 18,
        fontWeight: "200",
    },
    restaurantPriceRange: {
        fontSize: 17,
    },
    pinButton: {
        alignSelf: "flex-end",
    },
    restaurantGate: {
        fontSize: 19,
        fontWeight: "bold",
    },
});
