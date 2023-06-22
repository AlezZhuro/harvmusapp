import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '@screens/';
import {RootStackParamList, Screens} from '@shared/routes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Routing = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={Screens.HOME} component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
