import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotFoundScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Ionicons name="alert-circle-outline" size={80} color="red" />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Page Not Found</Text>
      <Text style={{ fontSize: 16, color: 'gray', marginVertical: 10 }}>
        The page you are looking for does not exist.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('/')} // ✅ Navigate to Home
        style={{
          backgroundColor: '#FF5722',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 50,
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFoundScreen;
