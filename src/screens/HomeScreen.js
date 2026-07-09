import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

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
    
    // Check if category already exists
    if (categories.some((c) => c.id === newId)) {
      alert('Category already exists!');
      return;
    }

    const newCategory = {
      id: newId,
      name: newCategoryName.trim(),
      icon: '📁', // default folder icon
    };

    setCategories([...categories, newCategory]);
    setNewCategoryName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Select a category to view your saved items:</Text>
      
      {categories.map((category) => (
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

      {/* Add Category Section (Logic Only) */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Category Name"
          value={newCategoryName}
          onChangeText={setNewCategoryName}
        />
        <Button title="Add Category" onPress={handleAddCategory} />
      </View>
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
  inputContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
