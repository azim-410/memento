import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

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

  const isEditable = !!isNew;

  return (
    <KeyboardAvoidingView 
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={[styles.input, !isEditable && styles.disabledInput]}
            placeholder="e.g. Eiffel Tower, Favorite Song..."
            placeholderTextColor="#9CA3AF"
            value={title}
            onChangeText={setTitle}
            editable={isEditable}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Link / URL</Text>
          <TextInput
            style={[styles.input, !isEditable && styles.disabledInput]}
            placeholder="e.g. https://instagram.com/p/..."
            placeholderTextColor="#9CA3AF"
            value={link}
            onChangeText={setLink}
            editable={isEditable}
            autoCapitalize="none"
            keyboardType="url"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={[styles.input, styles.textArea, !isEditable && styles.disabledInput]}
            placeholder="Why did you save this?"
            placeholderTextColor="#9CA3AF"
            value={note}
            onChangeText={setNote}
            multiline
            numberOfLines={4}
            editable={isEditable}
          />
        </View>

        <View style={styles.buttonContainer}>
          {isEditable ? (
            <>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save Item</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.cancelButton} 
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity 
              style={styles.cancelButton} 
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.cancelButtonText}>Back to List</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  container: {
    padding: 20,
    paddingTop: 24,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#111827',
  },
  disabledInput: {
    backgroundColor: '#F3F4F6',
    borderColor: '#E5E7EB',
    color: '#4B5563',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  buttonContainer: {
    marginTop: 10,
  },
  saveButton: {
    height: 50,
    backgroundColor: '#374151', // Dark slate gray (non-neon primary)
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
  },
});
