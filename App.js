import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigators from './src/navigation/StackNavigators/StackNavigators';
import BottomNavigator from './src/navigation/BottomNavigator';

function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}

export default App;
