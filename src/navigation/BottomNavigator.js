import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import Notifications from '../screen/Notifications';
import MySpace from '../screen/MySpace';
import Imagehomeicone from '../assets/home.png';
import bellicone from '../assets/bell.png';

import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#EFF8F1', color: '#FAB0A4'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarColor: '#444554',
          tabBarIcon: ({focused}) => (
            <Image
              source={Imagehomeicone}
              style={{
                height: 28,
                width: 28,
                tintColor: focused ? '#000' : '#8767',
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="My Space" component={MySpace} />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarColor: '#444554',
          tabBarIcon: ({focused}) => (
            <Image
              source={bellicone}
              style={{
                height: 28,
                width: 28,
                tintColor: focused ? '#000' : '#8767',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;