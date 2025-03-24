import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Input = ({ marginT }) => {
  const navigation = useNavigation();

  return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: marginT,
      }}>
        <TextInput
          placeholderTextColor='gray'
          placeholder='Or type your query...'
          style={{
            outline: 'none',
            padding: 10,
            paddingHorizontal: 20,
            color: 'black',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 50,
            width: 350, 
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
            marginLeft: 10, 
          }}
          onPress={() => navigation.navigate('search')}
        >
          <Ionicons name='send-outline' size={24} color='white' />
        </TouchableOpacity>
      </View>
  )
}

export default Input