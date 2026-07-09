import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { item, categoryId, isNew } = route.params || {};

  // Local state for our form inputs
  const [title, setTitle] = useState(item ? item.title : '');
  const [link, setLink] = useState(item ? item.link : '');
  const [note, setNote] = useState(item ? item.note : '');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a title');
      return;
    }
    
    // Simulate saving (real storage comes in Step 2)
    Alert.alert(
      'Success (Mock)',
      `Saved "${title}" successfully!`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Eiffel Tower, Favorite Song..."
        value={title}
        onChangeText={setTitle}
        editable={!!isNew}
      />

      <Text style={styles.label}>Link / URL</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. https://instagram.com/p/..."
        value={link}
        onChangeText={setLink}
        editable={!!isNew}
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Why did you save this?"
        value={note}
        onChangeText={setNote}
        multiline
        numberOfLines={4}
        editable={!!isNew}
      />

      {isNew ? (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Item</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
          style={[styles.saveButton, styles.closeButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.saveButtonText}>Back to List</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '#666',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
