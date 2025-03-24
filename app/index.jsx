import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreenCustom.jsx';
import HomeScreen from '../screens/HomeScreen.jsx';
import SearchScreen from '@/screens/SearchScreen.jsx';
import Recommendation from '@/screens/Recommendation.jsx';
import NotFoundScreen from '@/screens/NotFoundScreen.jsx';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: 'black',
          borderBottomLeftRadius: 14,
          borderBottomRightRadius: 14,
        },
        headerTintColor: 'white',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'semibold',
          color: 'white',
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('/')} style={{ marginRight: 15 }}>
            <Ionicons size={25} name="home" color="white" />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="/"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/images/online-shopping 1.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 16,
                  backgroundColor: 'white',
                  borderRadius: 100,
                }}
              />
              <Text style={{ fontSize: 20, fontWeight: 'semibold', color: 'white' }}>
                Shopping Assistant
              </Text>
            </View>
          ),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/images/online-shopping 1.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 16,
                  backgroundColor: 'white',
                  borderRadius: 100,
                }}
              />
              <Text style={{ fontSize: 20, fontWeight: 'semibold', color: 'white' }}>
                Search Results
              </Text>
            </View>
          ),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="recommendation"
        component={Recommendation}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/images/online-shopping 1.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 16,
                  backgroundColor: 'white',
                  borderRadius: 100,
                }}
              />
              <Text style={{ fontSize: 20, fontWeight: 'semibold', color: 'white' }}>
                Recommendation
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="*"
        component={NotFoundScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/images/online-shopping 1.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 16,
                  backgroundColor: 'white',
                  borderRadius: 100,
                }}
              />
              <Text style={{ fontSize: 20, fontWeight: 'semibold', color: 'white' }}>
                Recommendation
              </Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
