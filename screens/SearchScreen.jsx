import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useNavigation } from '@react-navigation/native'

const SearchScreen = () => {
  const navigation = useNavigation()
  const data = [
    {
      img: require('../assets/images/women-1.png'),
      title: "Women's Dress in yellow.",
      price: '$40'
    },
    {
      img: require('../assets/images/women-2.png'),
      title: "Women's Dress in white.",
      price: "$30"
    },
    {
      img: require('../assets/images/women-3.png'),
      title: "Women's Dress in blue.",
      price: '$35'
    },
  ]

  return (
    <View style={{
      marginHorizontal: 46,
    }}>
      <Input marginT={20} />
      {data.map((item, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 24, justifyContent: 'space-between',}}>
          <View style={styles.boxContainer}>
            <View>
              <Image style={{
                borderRadius: 8,
              }} source={item.img} />
            </View>
            <View style={{
              gap: 14,
            }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>amazon.com</Text>
              <Text style={styles.priceTag}>{item.price}</Text>
            </View>
          </View>
          <Button onPress={() => navigation.navigate('recommendation')}/>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333'
  },
  text: {
    color: '#757575',
    textDecorationLine: 'underline'
  },
  priceTag: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default SearchScreen