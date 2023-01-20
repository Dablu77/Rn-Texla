import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigators from './src/navigation/StackNavigators/StackNavigators';
import BottomNavigator from './src/navigation/BottomNavigator';
import {Store} from './src/redux/store';
import {Provider} from 'react-redux';
import MySpace from './src/screen/MySpace';

function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}

// const App = () => {
//   return (
//     <Provider store={Store}>
//       <MySpace />
//     </Provider>
//   );
// };

export default App;
