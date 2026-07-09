import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const MOCK_ITEMS = {
  places: [
    { id: '1', title: 'Eiffel Tower', note: 'Must visit during sunset.', link: 'https://instagram.com/...' },
    { id: '2', title: 'Grand Canyon', note: 'Plan a road trip here.', link: 'https://youtube.com/...' },
  ],
  music: [
    { id: '3', title: 'Blinding Lights by The Weeknd', note: 'Great driving song.', link: 'https://spotify.com/...' },
  ],
  books: [
    { id: '4', title: 'Atomic Habits by James Clear', note: 'Life-changing self-help book.', link: 'https://amazon.com/...' },
  ],
  movies: [
    { id: '5', title: 'Inception', note: 'Mind-bending sci-fi movie.', link: 'https://netflix.com/...' },
  ],
};

export default function CategoryScreen({ route, navigation }) {
  const { categoryId, categoryName } = route.params || { categoryId: 'places', categoryName: 'Places' };
  
  const items = MOCK_ITEMS[categoryId] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Saved items in {categoryName}:</Text>
      
      {items.length === 0 ? (
        <Text style={styles.noItemsText}>No items saved in this folder yet.</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemButton}
              onPress={() => navigation.navigate('Detail', { itemId: item.title, item })}
            >
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemNote} numberOfLines={1}>{item.note}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Detail', { categoryId, isNew: true })}
      >
        <Text style={styles.addButtonText}>+ Add New Item</Text>
      </TouchableOpacity>
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
  noItemsText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  itemButton: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemNote: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addButton: {
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
