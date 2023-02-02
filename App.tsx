import * as React from 'react';

import {Provider} from 'react-redux';
import store from './src/store';
import AppInner from './AppInner';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </Provider>
  );
}

// npm i @react-navigation/native
// npm i @react-navigation/native-stack
// npm i react-native-screens react-native-safe-area-context
// npx pod-install # 맥 전용
// npm i react-native-keyboard-aware-scroll-view --save
// npm install @react-navigation/bottom-tabs
// npm install react-native-simple-modal --save
// npm i react-native-vector-icons react-native-paper
// npm i --save-dev @types/react-native-vector-icons
