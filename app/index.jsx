import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreenCustom.jsx'
import HomeScreen from '../screens/HomeScreen.jsx'
import { View,Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={({ navigation, route }) => ({
      headerStyle: { backgroundColor: 'black', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, },
      headerTintColor: 'white',
      headerTitleAlign: 'left',
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Image 
            source={require('../assets/images/online-shopping 1.png')}
            style={{ width: 30, height: 30, marginRight: 16, backgroundColor: 'white', borderRadius: '100%',}}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            {route.name === 'Home' ? 'Shopping Assistant' : route.name}
          </Text>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginRight: 15, }}>
          <Ionicons size={25} name='home' color='white' />
        </TouchableOpacity>
      )
    })}>
      <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
