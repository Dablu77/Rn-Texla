import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import notifiimage from '../assets/bell.png';

export default function Notifications({navigation}) {
  const Srt = [
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
    {
      Image: notifiimage,
      Title:
        'react-native-range-datepicker. This is my first package,first package,',
    },
  ];
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#AFF0D2'} barStyle={'black'} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={Srt}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{paddingTop: 10, paddingBottom: 60}}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              borderRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={item.Image}
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: 'red',
              }}
            />
            <Text
              style={{
                color: 'black',
                alignSelf: 'center',
                left: 10,
                flexWrap: 'wrap',
              }}>
              {item.Title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
