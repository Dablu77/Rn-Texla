import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import Notifications from '../screen/Notifications';
import MySpace from '../screen/MySpace';
import Imagehomeicone from '../assets/home.png';
import bellicone from '../assets/bell.png';

import { Image, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#EFF8F1', color: '#FAB0A4' },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarColor: '#444554',
          tabBarIcon: ({ focused }) => (
            <Image
              source={Imagehomeicone}
              style={{
                height: 28,
                width: 28,
                tintColor: focused ? '#38A020' : '#8767',
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="My Space" component={MySpace}
        options={{
          headerShown: false,
          tabBarColor: '#444554',
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: 35, width: 35, borderWidth: 1, borderRadius: 25,
              alignItems: 'center', backgroundColor: '#4D63CE',
              justifyContent: 'center', tintColor: focused ? '#38A020' : '#8767',
            }}>
              {/* <Text style={{ color: 'black', fontSize: 19, }}>?</Text> */}
              <Image source={require('../assets/icone.jpeg')} style={{ height: 35, width: 35, borderRadius: 25, alignSelf: 'center' }} />

            </View>
          ),
        }} />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarColor: '#444554',
          tabBarIcon: ({ focused }) => (
            <Image
              source={bellicone}
              style={{
                height: 28,
                width: 28,
                tintColor: focused ? '#38A020' : '#8767',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
