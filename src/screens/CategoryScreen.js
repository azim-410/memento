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
      <Text style={styles.subtitle}>Saved items in this folder:</Text>
      
      {items.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📂</Text>
          <Text style={styles.noItemsText}>No items saved here yet.</Text>
          <Text style={styles.emptySubtext}>Share links directly to Memento to fill this folder!</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemCard}
              onPress={() => navigation.navigate('Detail', { itemId: item.title, item })}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.arrowIcon}>›</Text>
              </View>
              {item.note ? <Text style={styles.itemNote} numberOfLines={2}>{item.note}</Text> : null}
              {item.link ? <Text style={styles.itemLink} numberOfLines={1}>{item.link}</Text> : null}
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
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: '#F9FAFB', // Soft off-white background
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  arrowIcon: {
    fontSize: 20,
    color: '#9CA3AF',
    fontWeight: '300',
  },
  itemNote: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 6,
  },
  itemLink: {
    fontSize: 13,
    color: '#6B7280',
    textDecorationLine: 'underline',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
    opacity: 0.5,
  },
  noItemsText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  addButton: {
    height: 52,
    backgroundColor: '#374151', // Dark slate gray (non-neon primary)
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
