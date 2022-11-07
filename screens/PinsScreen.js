import * as React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function PinsScreen({ pinnedFlight, setPinnedFlight }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pins Screen</Text>
      <IconButton
        icon="pin"
        size={50}
        onPress={() => {
          if (pinnedFlight === undefined) {
            setPinnedFlight({ name: 'Pinned flight', time: '12:00 am' });
          } else {
            setPinnedFlight(undefined);
          }
        }}
      />
      <Text>{pinnedFlight !== undefined ? 'Pinned' : 'Not pinned'}</Text>
    </View>
  );
}
