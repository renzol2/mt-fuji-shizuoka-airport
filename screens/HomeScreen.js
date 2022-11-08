import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Title, Paragraph, Surface } from 'react-native-paper';
import AppBar from '../Components/AppBar';
import { colorScheme } from '../Styles';

/**
 * Home screen
 */
export default function HomeScreen({ pinnedFlight }) {
  return (
    <View style={styles.container}>
      <StatusBar />
      <AppBar />

      <View style={styles.hStack}>
        <Button mode="contained" style={styles.hStackItem}>
          Schedule
        </Button>
        <Button mode="contained" style={styles.hStackItem}>
          Airport Info
        </Button>
      </View>

      <View style={styles.vStack}>
        <Button
          mode="contained"
          icon="door-sliding"
          style={styles.vStackItem}
          labelStyle={styles.buttonText}
        >
          Gate Amenity Finder
        </Button>
        <Button
          mode="contained"
          icon="format-list-bulleted"
          style={styles.vStackItem}
          labelStyle={styles.buttonText}
        >
          Flight Search
        </Button>
        <Button mode="contained" icon="airplane" style={styles.vStackItem}>
          Your Flight Information
        </Button>
      </View>

      {/* MIGHT SWITCH THIS OUT OF BEING A CARD DUE TO FORMATTING LIMITARIONS IN A CARD */}
      <Card style={styles.card}>
        <Card.Title style={{ fontSize: 30 }} title="Your Flight Information" />
        <Card.Content>
          {pinnedFlight !== undefined ? (
            <>
              <Text style={styles.cardBodyRight}>Gate: {pinnedFlight.gate}</Text>
              <Text style={styles.cardBody}>Time: {pinnedFlight.time} </Text>
              <Text style={styles.cardBody}>Departure: {pinnedFlight.departure}</Text>
              <Text style={styles.cardBody}>Arrival: {pinnedFlight.arrival}</Text>

            </>
          ) : (
            <Text style={styles.cardBody}>Pin a Flight to see it here!</Text>
          )}

        </Card.Content>
      </Card>

    </View >
  );
}

// TODO later: MOVE THIS STYLESHEET TO STYLES.JS (AND EXPORT)
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    flex: 1, // makes component take up all available space (https://reactnative.dev/docs/flexbox)
  },

  hStack: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-evenly',
    marginTop: 50,
  },

  vStack: {
    flexDirection: 'column',
    height: 400,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  hStackItem: {
    width: 150,
    backgroundColor: colorScheme.primary
  },

  vStackItem: {
    width: 300,
    padding: 10,
    backgroundColor: colorScheme.primary
  },

  buttonText: {
    fontSize: 20,
  },
  card: {
    backgroundColor: colorScheme.light

  },
  cardBody: {
    fontSize: 20
  },
  cardBodyRight: {
    alignContent: "flex-end",
    fontSize: 25
  }

});
