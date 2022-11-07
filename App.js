import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import AppBar from './Components/AppBar';
import BottomNavigator from './Components/BottomNavigator';

export default function App() {
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
          style={styles.vStackItem}
          labelStyle={styles.buttonText}
        >
          Gate
        </Button>
        <Button
          mode="contained"
          style={styles.vStackItem}
          labelStyle={styles.buttonText}
        >
          Flight Search
        </Button>
        <Button
          mode="contained"
          icon="camera"
          style={styles.vStackItem}
          labelStyle={{ fontSize: 19 }}
        >
          Your Flight Information
        </Button>
      </View>
      <BottomNavigator />
    </View>
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
  },

  vStackItem: {
    width: 300,
    padding: 10,
  },

  buttonText: {
    fontSize: 20,
  },

  primaryButton: {
    color: '#0277bd',
  },
});
