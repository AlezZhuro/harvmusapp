import React from 'react';
import {Text, View} from 'native-base';
import tw from 'twrnc';

import {GalleryListItem} from '../../model';

interface PreviewItemProps extends GalleryListItem {}

export const PreviewItem: React.FC<PreviewItemProps> = ({name}) => {
  return (
    <View style={tw`flex-1`}>
      <Text>{name}</Text>
    </View>
  );
};
