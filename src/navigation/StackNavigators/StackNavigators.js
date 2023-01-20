import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screen/HomeScreen';
import Message from '../../screen/Message';

const Stack = createNativeStackNavigator();

function StackNavigators() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigators;
