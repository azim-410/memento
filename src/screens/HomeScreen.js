import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';

const INITIAL_CATEGORIES = [
  { id: 'places', name: 'Places', icon: '📍' },
  { id: 'music', name: 'Music', icon: '🎵' },
  { id: 'books', name: 'Books', icon: '📚' },
  { id: 'movies', name: 'Movies', icon: '🎬' },
];

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    const newId = newCategoryName.toLowerCase().replace(/\s+/g, '-');
    
    if (categories.some((c) => c.id === newId)) {
      alert('Category already exists!');
      return;
    }

    const newCategory = {
      id: newId,
      name: newCategoryName.trim(),
      icon: '📁',
    };

    setCategories([...categories, newCategory]);
    setNewCategoryName('');
  };

  const renderCategoryCard = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => navigation.navigate('Category', {
        categoryId: item.id,
        categoryName: item.name
      })}
    >
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Welcome to Memento</Text>
      <Text style={styles.subtitle}>Select a folder to view your saved links:</Text>
      
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryCard}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.addCategoryContainer}>
        <Text style={styles.sectionTitle}>Add New Folder</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="e.g. Recipes, Workout..."
            placeholderTextColor="#9CA3AF"
            value={newCategoryName}
            onChangeText={setNewCategoryName}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddCategory}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    backgroundColor: '#F9FAFB', // Soft premium off-white
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827', // Charcoal black
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280', // Muted gray
    marginBottom: 24,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  addCategoryContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    backgroundColor: '#F9FAFB',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#111827',
    marginRight: 10,
  },
  addButton: {
    height: 48,
    backgroundColor: '#374151', // Dark slate gray (non-neon primary)
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
