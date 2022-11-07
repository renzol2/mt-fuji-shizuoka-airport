import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { VStack, HStack, Box, Button, Flex, AppBar } from "@react-native-material/core";

export default function App() {
  return (

    <View style={styles.container}>
      <AppBar title="O'Hare International Airport (ORD)" marginBottom={20} />
      <VStack alignItems="center" spacing={20}>
        <HStack spacing={10}>
          <Button title="Schedule" />
          <Button title="Airport Information"> </Button>
        </HStack>
        <VStack spacing={50}>
          <Button title="Amenity Finder" />
          <Button title="Find a Flight" />
          <Button title="Your Flight Information" />

        </VStack>



      </VStack>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',

    justifyContent: "flex-start",

  },
});
