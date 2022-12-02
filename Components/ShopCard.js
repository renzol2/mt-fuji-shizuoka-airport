import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Colors,
    IconButton,
    Surface,
    Text,
    Dialog,
    Portal,
    Paragraph,
    Button,
    Snackbar,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AMENITY_TYPES } from "../data/amenityTypes";
import { colorScheme } from "../Styles";

/**
 * Renders basic shop information
 * @param {{
 *  name: string,
 *  hours: Array<import("../data/shops").Hours>,
 *  gate: string,
 *  description: string,
 *  pinnedAmenities: Array,
 *  setPinnedAmenities: React.SetStateAction
 * }}
 */
export default function ShopCard({
    name,
    hours,
    gate,
    description,
    pinnedAmenities,
    setPinnedAmenities,
}) {
    const BUTTON_SIZE = 24;
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    const currentHours = hours[currentDayIndex];
    const { day } = currentHours;
    const [openingTime, setOpeningTime] = React.useState(
        currentHours.openingTime
    );
    const [closingTime, setClosingTime] = React.useState(
        currentHours.closingTime
    );
    const [changingOpeningTime, setChangingOpeningTime] = React.useState(true);

    const [crowdsourcePrompt, setCrowdsourcePrompt] = React.useState(false);
    const showCrowdsourcePrompt = () => setCrowdsourcePrompt(true);
    const hideCrowdsourcePrompt = () => setCrowdsourcePrompt(false);

    const [crowdsourceUpdate, setCrowdsourceUpdate] = React.useState(false);
    const showCrowdsourceUpdate = () => setCrowdsourceUpdate(true);
    const hideCrowdsourceUpdate = () => setCrowdsourceUpdate(false);

    const [timepicker, setTimepicker] = React.useState(false);
    const showTimepicker = () => setTimepicker(true);
    const hideTimepicker = () => setTimepicker(false);

    const [visible, setVisible] = React.useState(false);
    const [showDescription, setShowDescription] = React.useState(false);
    const onToggleSnackBar = () => {
        setVisible(!visible);
        hideCrowdsourceUpdate();
        hideCrowdsourcePrompt();
    };
    const onDismissSnackBar = () => setVisible(false);

    const [mydate, setCurrentDate] = React.useState(new Date());

    const changeSelectedDate = (event, selectedDate) => {
        if (event.type === "set") {
            const { nativeEvent } = event;
            const newTime = new Date(nativeEvent.timestamp)
                .toTimeString()
                .substring(0, 8);
            const hour = newTime.substring(0, 2);
            const timeString =
                (parseInt(hour) % 12).toString() +
                newTime.substring(2, 5) +
                (hour > 12 ? "pm" : "am");
            if (changingOpeningTime) {
                setOpeningTime(timeString);
            } else {
                setClosingTime(timeString);
            }

            const currentDate = selectedDate || mydate;
            setCurrentDate(currentDate);
            setTimepicker(false);
        }
    };
    const isPinned = pinnedAmenities.some((amenity) => name === amenity.name);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    return (
        <Surface
            style={styles.shopSurface}
            key={name}
        >
            {/* shop information */}
            <View style={{ width: 300 }}>
                {/* Name of shop */}
                <Text style={styles.shopName}>{name}</Text>

                {/* Hours */}
                <Text style={styles.shopHours}>
                    {`Hours (${day}): ${currentHours.openingTime} - ${currentHours.closingTime}`}
                </Text>

                {/* Gate */}
                <Text style={styles.shopGate}>{`Gate: ${gate}`}</Text>

                {/* Description */}
                <Button
                    color="white"
                    style={styles.detailsButton}
                    onPress={() => setShowDescription(true)}
                >
                    Details
                </Button>

                <Portal>
                    <Dialog
                        visible={showDescription}
                        onDismiss={() => setShowDescription(false)}
                        style={{ backgroundColor: colorScheme.backgroundPage }}
                    >
                        <Dialog.Title>{name}</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>{description}</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button
                                onPress={() => setShowDescription(false)}
                                color={colorScheme.dark}
                            >
                                Close
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
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
                        console.log("Pin this shop!");
                        if (isPinned) {
                            // if the shop is pinned, unpin the shop
                            setPinnedAmenities(
                                pinnedAmenities.filter(
                                    (amenity) =>
                                        !(
                                            name === amenity.name &&
                                            gate === amenity.gate &&
                                            AMENITY_TYPES.SHOPS === amenity.type
                                        )
                                )
                            );
                        } else {
                            // if the shop is unpinned, pin the shop
                            setPinnedAmenities([
                                ...pinnedAmenities,
                                { name, gate, type: AMENITY_TYPES.SHOPS },
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
                    <Dialog
                        visible={crowdsourcePrompt}
                        onDismiss={hideCrowdsourcePrompt}
                    >
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
                    <Dialog
                        visible={crowdsourceUpdate}
                        onDismiss={hideCrowdsourceUpdate}
                    >
                        <Dialog.Title>Hours</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>What are the correct hours?</Paragraph>
                            <Button
                                onPress={() => {
                                    setChangingOpeningTime(true);
                                    showTimepicker();
                                }}
                            >
                                Open: {openingTime}
                            </Button>
                            <Button
                                onPress={() => {
                                    setChangingOpeningTime(false);
                                    showTimepicker();
                                }}
                            >
                                Close: {closingTime}
                            </Button>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={onToggleSnackBar}>Confirm</Button>
                            <Button onPress={hideCrowdsourceUpdate}>
                                Cancel
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                    {/* Timepicker dialog */}
                    <Dialog
                        visible={timepicker}
                        onDismiss={hideTimepicker}
                    >
                        <Dialog.Title>Hours</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>What are the correct hours?</Paragraph>
                            <DateTimePicker
                                value={mydate}
                                mode={"time"}
                                is24Hour={false}
                                display={true}
                                onChange={changeSelectedDate}
                            />
                        </Dialog.Content>
                    </Dialog>
                    <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                    >
                        Updated hours have been submitted. We'll change the
                        hours once enough people have submitted the same
                        information.
                    </Snackbar>
                </Portal>
            </View>
        </Surface>
    );
}

const styles = StyleSheet.create({
    shopSurface: {
        marginVertical: 10,
        padding: 20,
        elevation: 4,
        textAlign: "left",
        backgroundColor: colorScheme.dark,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
    },
    shopName: {
        fontSize: 23,
        fontWeight: "bold",
        color: "white",
    },
    shopHours: {
        fontSize: 18,
        fontWeight: "200",
        color: "white",
    },
    pinButton: {
        alignSelf: "flex-end",
    },
    shopGate: {
        fontSize: 19,
        fontWeight: "bold",
        color: "white",
    },
    detailsButton: {
        alignSelf: "flex-start",
        marginLeft: -16,
    },
});
