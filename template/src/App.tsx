import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Root from '@router';

const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Root />
      </SafeAreaView>
    </>
  );
};

export default App;
