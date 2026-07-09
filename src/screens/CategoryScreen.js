import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CategoryScreen({ route, navigation }) {
  // We'll read category name from route params later
  const categoryName = route?.params?.categoryName || 'Category';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName} Folder</Text>
      <Text>Your saved items in this category will show here.</Text>
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
