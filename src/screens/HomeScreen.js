import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MOCK_CATEGORIES = [
  { id: 'places', name: 'Places', icon: '📍' },
  { id: 'music', name: 'Music', icon: '🎵' },
  { id: 'books', name: 'Books', icon: '📚' },
  { id: 'movies', name: 'Movies', icon: '🎬' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Select a category to view your saved items:</Text>
      
      {MOCK_CATEGORIES.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={styles.categoryButton}
          onPress={() => navigation.navigate('Category', {
            categoryId: category.id,
            categoryName: category.name
          })}
        >
          <Text style={styles.categoryText}>{category.icon} {category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 18,
  },
});
