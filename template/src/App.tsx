import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Root from '@router';
import { store, Provider } from '@configs/dva.js';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Root />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
