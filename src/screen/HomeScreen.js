import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#D3D3D3', height: '35%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <View style={Styles.sectionStyle}>
            <Image
              source={require('../assets/search.png')}
              style={{height: 25, width: 25, marginHorizontal: 5}}
            />
            <TextInput
              style={Styles.input}
              placeholder="Search"
              placeholderTextColor="#888888"
            />
          </View>
          <TouchableOpacity>
            <Image
              source={require('../assets/speech-bubble.png')}
              style={{height: 30, width: 30, top: 15}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{color: 'black'}}>Announcements</Text>
          <TouchableOpacity
            style={{borderBottomWidth: 1, borderColor: '#14C139'}}>
            <Text style={{color: '#14C139'}}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{marginVertical: 25, marginHorizontal: 10}}>
            <View
              style={{
                height: 60,
                // width: '100%',
                backgroundColor: '#F3A483',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                opacity: 0.7,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  height: 40,
                  width: 40,
                  borderRadius: 7,
                  justifyContent: 'center',
                  backgroundColor: '#F5DD0A',
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  ?
                </Text>
              </View>

              <View style={{paddingHorizontal: 10}}>
                <Text style={{color: 'black'}}>
                  Employees Are Expected To Clock...
                </Text>
                <Text style={{color: 'grey', fontWeight: '500'}}>
                  1 hour ago
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 25, marginHorizontal: 10}}>
            <View
              style={{
                height: 60,
                // width: '100%',
                backgroundColor: '#F3A483',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                opacity: 0.7,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  height: 40,
                  width: 40,
                  borderRadius: 7,
                  justifyContent: 'center',
                  backgroundColor: '#F5DD0A',
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  ?
                </Text>
              </View>

              <View style={{paddingHorizontal: 10}}>
                <Text style={{color: 'black'}}>
                  Employees Are Expected To Clock...
                </Text>
                <Text style={{color: 'grey', fontWeight: '500'}}>
                  1 hour ago
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 25, marginHorizontal: 10}}>
            <View
              style={{
                height: 60,
                // width: '100%',
                backgroundColor: '#F3A483',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                opacity: 0.7,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  height: 40,
                  width: 40,
                  borderRadius: 7,
                  justifyContent: 'center',
                  backgroundColor: '#F5DD0A',
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  ?
                </Text>
              </View>

              <View style={{paddingHorizontal: 10}}>
                <Text style={{color: 'black'}}>
                  Employees Are Expected To Clock...
                </Text>
                <Text style={{color: 'grey', fontWeight: '500'}}>
                  1 hour ago
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          height: '45%',
          backgroundColor: '#D3D3D7',
          marginVertical: 4,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
        }}>
        <View style={{alignItems: 'center', top: 5}}>
          <Text style={{fontSize: 22, color: '#F39374'}}>Welcome</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              borderWidth: 1,
              height: height / 4,
              width: width / 3,
              borderRadius: 15,
              alignItems: 'center',
              paddingVertical: 10,
              marginHorizontal: 20,
              marginVertical: 15,
              backgroundColor: '#C9FFE6',
              borderColor: '#09F386',
            }}>
            <View
              style={{
                borderWidth: 1,
                height: 60,
                width: 60,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#AFF0D2',
                borderColor: '#11B669',
              }}>
              <Text style={{color: 'black', fontSize: 20}}>?</Text>
            </View>
            <Text style={{color: '#1143B6', fontWeight: '500'}}>Megha</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    borderWidth: 1,
    borderColor: 'white',
    height: 45,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  input: {
    height: 40,
    color: '#F7B02D',
    fontSize: 15,
    paddingHorizontal: 15,
  },
});
