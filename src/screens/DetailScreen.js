import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  // We'll read the item ID or details from route params later
  const itemId = route?.params?.itemId || 'New Item';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Detail Screen</Text>
      <Text>Viewing details for: {itemId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
