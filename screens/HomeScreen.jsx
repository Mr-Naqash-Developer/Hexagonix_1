import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [query, setQuery] = useState('');

  return (
    <View style={{ justifyContent: 'center', height: '100%', paddingHorizontal: 48, gap: 20 }}>

      <View style={{
        flex: 1, // Ensures equal spacing
        justifyContent: 'center', // Distributes space evenly
        alignItems: 'center',
        gap: 200,
        paddingVertical: 80, // Adjust padding for better spacing
      }}>

        {/* Voice Search Button */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF5722',
              borderRadius: 70,
              width: 140,
              height: 140,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: 'black',
            }}
          >
            <Ionicons name='mic-outline' size={80} color='white' />
          </TouchableOpacity>
          <Text style={{ marginTop: 20, fontSize: 20, color: 'black' }}>
            Tap the microphone to speak your query
          </Text>
        </View>

        {/* Text Input for Search */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
          <TextInput
            placeholderTextColor='gray'
            placeholder='Or type your query...'
            value={query}
            onChangeText={setQuery}
            style={{
              padding: 10,
              paddingHorizontal: 20,
              color: 'black',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 50,
              width: 300, // Adjust width for better responsiveness
              backgroundColor: '#F5F5F5',
              fontSize: 16,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#FF5722',
              width: 48,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              marginLeft: 10, // Add spacing between input and button
            }}
          >
            <Ionicons name='send-outline' size={24} color='white' />
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Searches */}
      <View>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          Recent Searches
        </Text>
        <View style={{
          flexDirection: 'row',
          gap: 8,
          marginTop: 10,
        }}>
          {['Headphones', 'Dress', 'Laptops'].map((item, index) => (
            <TouchableOpacity key={index} style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 8,
              backgroundColor: '#F5F5F5',
              borderRadius: 20,
            }}>
              <View style={{
                width: 8,
                height: 8,
                backgroundColor: '#008080',
                borderRadius: 50,
                marginRight: 6,
              }} />
              <Text style={{ fontSize: 14 }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </View>
  );
};

export default HomeScreen;
