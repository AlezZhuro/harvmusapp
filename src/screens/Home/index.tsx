import React from 'react';
import {View} from 'native-base';
import {ScreenProps, Screens} from '@shared/routes';
import tw from 'twrnc';
import {GalleryList} from '@widgets/';

interface HomeScreenProps {}

export const HomeScreen: React.FC<
  HomeScreenProps & ScreenProps<Screens.HOME>
> = () => {
  return (
    <View style={tw`flex-1`}>
      <GalleryList />
    </View>
  );
};
