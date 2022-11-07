import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AppBar from './Components/AppBar';

export default function App() {
  return (


    <View style={styles.container}>
      <AppBar />

      <View style={styles.hStack}>
        <Button mode="contained" style={{ flex: 1 }}>Schedule</Button>
        <Button mode="contained" style={{ flex: 1 }}>Airport Information</Button>

      </View>


    </View>


  );
}

// TODO later: MOVE THIS STYLESHEET TO STYLES.JS (AND EXPORT)
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    flex: 1// makes component take up all available space (https://reactnative.dev/docs/flexbox)
  },

  hStack: {
    flexDirection: "row",
  },

  primaryButton: {
    color: '#0277bd'
  }
});


