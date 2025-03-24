import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Button from '@/components/Button'

const Recommendation = () => {
  const data = [
    {
      img: require('../assets/images/women-1.png'),
      title: "Women Floral Print Puff Sleeve.",
      price: '$40'
    },
    {
      img: require('../assets/images/women-2.png'),
      title: "Women Floral Print Puff Sleeve.",
      price: "$30"
    },
    {
      img: require('../assets/images/women-3.png'),
      title: "Women Floral Print Puff Sleeve.",
      price: '$35'
    },
  ]

  return (
    <View style={{
      marginHorizontal: 50,
    }}>
      {data.map((item, index) => (
        <View key={index} style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 18,
        }}>
          <Image style={{
            borderRadius: 8,
            width: 170,
            height: 190,
          }} source={item.img}/>
          <View style={{
            gap: 6,
          }}> 
            <Text style={styles.title}>{item.title}</Text>
            <View style={{
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
            }}>
              <Text style={styles.priceTag}>{item.price}</Text>
              <Text style={styles.text}>amazon.com</Text>
            </View>
            <Text style={{
              fontSize: 15,
              width: 180,
            }}>This is the best value for your query.</Text>
            <Button />
          </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    width: 200,
    color: '#333333'
  },
  text: {
    color: '#757575',
    textDecorationLine: 'underline',
  },
  priceTag: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default Recommendation