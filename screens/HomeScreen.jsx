import { View, Text, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '@/components/Input';

const HomeScreen = () => {
  return (
    <View style={{ justifyContent: 'center', height: '100%', paddingHorizontal: 48, backgroundColor: '#FFFFFF' }}>

      <View style={{
        flex: 1, // Ensures equal spacing
        justifyContent: 'center', // Distributes space evenly
        alignItems: 'center',
        gap: 225,
        paddingVertical: 120, // Adjust padding for better spacing
      }}>

        {/* Voice Search Button */}
        <View style={{ alignItems: 'center', marginTop: 120, }}>
          <TouchableOpacity style={{ borderWidth: 1, borderRadius: '100%', borderColor: '#E3E3E3' }}>
            <View style={{ borderWidth: 1, borderRadius: '100%', margin: 8, }}>
              <View
                style={{
                  backgroundColor: '#FF5722',
                  borderRadius: '100%',
                  width: 140,
                  height: 140,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 8,
                }}
              >
                <Ionicons name='mic-outline' size={80} color='white' />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 20, fontSize: 20, color: 'black' }}>
            Tap the microphone to speak your query
          </Text>
        </View>

        {/* Text Input for Search */}
        <View>
          <Input marginT={50} />
          {/* Recent Searches */}
          <View style={{
            marginTop: 20,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}>
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
      </View>
    </View>
  );
};

export default HomeScreen;
