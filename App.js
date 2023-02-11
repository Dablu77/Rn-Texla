import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/navigation/BottomNavigator';


function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}

export default App

// const NewApp = () => {
//   return (
//     // <Provider store={Store}>
//     <View>
//       <MySpace {...store} />
//     </View>
//     // </Provider>
//   );
// };

// export default NewApp;

// import {View, Text} from 'react-native';
// import React from 'react';
// import MySpace from './src/screen/MySpace';
// import store from './src/redux/store';

// export default function App() {
//   return (
//     <View style={{flex: 1}}>
//       <MySpace {...store} />
//     </View>
//   );
// }
