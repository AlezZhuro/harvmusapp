import React from 'react';
import {Text, View} from 'native-base';
import {ScreenProps, Screens} from '@shared/routes';
import tw from 'twrnc';

interface HomeScreenProps {}

const HomeScreen: React.FC<
  HomeScreenProps & ScreenProps<Screens.HOME>
> = () => {
  return (
    <View style={tw`flex-1`}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
