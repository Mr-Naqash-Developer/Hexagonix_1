import { View, Text, Image, StyleSheet } from 'react-native'
import { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {
  const splashImg = require('../assets/images/online-shopping 1.png')

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={splashImg} style={styles.logo} />
      <Text style={styles.title}>Shopping Assistant</Text>
      <Text style={styles.tagline}>Smart Shopping Simplified</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontWeight: 700,
    fontSize: 32,
  },
  tagline: {
    fontSize: 21,
    fontWeight: 400,
  },
})

export default SplashScreen