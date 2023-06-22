import React from 'react';

import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routing} from './routes';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

function App(): JSX.Element {
  return (
    <NativeBaseProvider config={config}>
      <SafeAreaProvider>
        <Routing />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;
