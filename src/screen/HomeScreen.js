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
      <View
        style={{
          backgroundColor: '#D3D3D3',
          height: '33%',
          paddingVertical: 15,
        }}>
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
          <View style={{marginHorizontal: 10, paddingVertical: 14}}>
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
                <Image
                  source={require('../assets/icone.jpeg')}
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 25,
                    alignSelf: 'center',
                  }}
                />
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
          <View style={{paddingVertical: 14, marginHorizontal: 10}}>
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
                <Image
                  source={require('../assets/icone.jpeg')}
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 25,
                    alignSelf: 'center',
                  }}
                />
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
          <View style={{marginHorizontal: 10, paddingVertical: 14}}>
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
                <Image
                  source={require('../assets/icone.jpeg')}
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 25,
                    alignSelf: 'center',
                  }}
                />
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60}}>
        <View
          style={{
            height: '33%',
            backgroundColor: '#D3D3D7',
            marginVertical: 4,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 22, color: '#F39374', marginVertical: 10}}>
              Welcome
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                borderWidth: 1,
                height: height / 4.5,
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
                  marginTop: 5,
                }}>
                {/* <Text style={{ color: 'black', fontSize: 20 }}>?</Text> */}
                <Image
                  source={require('../assets/icone.jpeg')}
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 25,
                    alignSelf: 'center',
                  }}
                />
              </View>
              <Text style={{color: '#1143B6', fontWeight: '500', fontSize: 16}}>
                Megha
              </Text>
              <Text style={{color: 'grey', fontWeight: '500', marginTop: 3}}>
                UX Designer Joined today
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                height: height / 4.5,
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
                  marginTop: 5,
                }}>
                {/* <Text style={{ color: 'black', fontSize: 20 }}>?</Text> */}
                <Image
                  source={require('../assets/icone.jpeg')}
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 25,
                    alignSelf: 'center',
                  }}
                />
              </View>
              <Text style={{color: '#1143B6', fontWeight: '500', fontSize: 16}}>
                Megha
              </Text>
              <Text style={{color: 'grey', fontWeight: '500', marginTop: 3}}>
                UX Designer Joined today
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                height: height / 4.5,
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
                  marginTop: 5,
                }}>
                {/* <Text style={{ color: 'black', fontSize: 20 }}>?</Text> */}
                <Image
                  source={require('../assets/icone.jpeg')}
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 25,
                    alignSelf: 'center',
                  }}
                />
              </View>
              <Text style={{color: '#1143B6', fontWeight: '500', fontSize: 16}}>
                Dablu
              </Text>
              <Text style={{color: 'grey', fontWeight: '500', marginTop: 3}}>
                UX Designer Joined today
              </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            height: height / 10,
            marginTop: 20,
            backgroundColor: '#B7E5F0',
            opacity: 0.7,
            marginHorizontal: 15,
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Image
            source={require('../assets/three-o-clock-clock.png')}
            style={{height: 40, width: 40}}
          />
          <View style={{right: 20}}>
            <Text style={{color: 'black', fontWeight: '500'}}>03/01/23</Text>
            <Text style={{color: 'black', fontWeight: '500'}}>
              Clock In - hh:mm AM
            </Text>
            <Text style={{color: 'black', fontWeight: '500'}}>
              Clock Out - hh:mm PM
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../assets/chevron.png')}
              style={{height: 40, width: 40}}
            />
          </TouchableOpacity>
        </View>
        {/* ??????????????? */}

        <View
          style={{
            height: height / 2.8,
            backgroundColor: 'white',
            marginHorizontal: 10,
            top: 15,
            borderRadius: 15,
            elevation: 10,
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              fontWeight: '500',
              margin: 15,
            }}>
            Celebrations
          </Text>
          <View
            style={{
              borderWidth: 1,
              marginHorizontal: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: height / 13,
              alignItems: 'center',
              paddingHorizontal: 15,
              backgroundColor: '#76FD9A',
              // opacity: 0.5,
            }}>
            <Text style={{color: 'black', fontWeight: '500'}}>Birthday</Text>
            <Image
              source={require('../assets/icone.jpeg')}
              style={{
                height: 40,
                width: 40,
                borderRadius: 15,
              }}
            />
            <Text
              style={{
                color: '#057B24',
                fontWeight: '500',
              }}>
              Dablu
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/chevron.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              marginHorizontal: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: height / 13,
              alignItems: 'center',
              paddingHorizontal: 15,
              backgroundColor: '#80F3DA',
              // opacity: 0.5,
              marginVertical: 15,
            }}>
            <Text style={{color: 'black', fontWeight: '500'}}>
              Marriage{'\n'}Anniversary
            </Text>
            <Image
              source={require('../assets/icone.jpeg')}
              style={{
                height: 40,
                width: 40,
                borderRadius: 15,
                right: 10,
              }}
            />
            <Text
              style={{
                color: '#055D4A',
                fontWeight: '500',
              }}>
              Yash
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/chevron.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ???????????????/ */}

        <View
          style={{
            height: height / 2.8,
            backgroundColor: 'white',
            marginHorizontal: 10,
            top: 15,
            borderRadius: 15,
            elevation: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              fontWeight: '500',
              margin: 15,
            }}>
            My Tasks
          </Text>
          <View
            style={{
              borderWidth: 1,
              marginHorizontal: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: height / 13,
              alignItems: 'center',
              paddingHorizontal: 15,
            }}>
            <Text style={{color: 'black', fontWeight: '500'}}>Attendance</Text>
            <Text style={{color: 'grey', fontWeight: '500'}}>17</Text>
            <Text
              style={{
                color: '#11B669',
                fontWeight: '500',
                borderBottomWidth: 1,
                borderColor: '#11B669',
              }}>
              View
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              marginHorizontal: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: height / 13,
              alignItems: 'center',
              paddingHorizontal: 15,
              marginVertical: 15,
            }}>
            <Text style={{color: 'black', fontWeight: '500'}}>Attendance</Text>
            <Text style={{color: 'grey', fontWeight: '500'}}>18</Text>
            <Text
              style={{
                color: '#11B669',
                fontWeight: '500',
                borderBottomWidth: 1,
                borderColor: '#11B669',
              }}>
              View
            </Text>
          </View>
        </View>
      </ScrollView>
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
