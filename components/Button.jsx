import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.button}>
        Buy Now
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5722',
    color: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 14,
    textAlign: 'center',
  }
})


export default Button