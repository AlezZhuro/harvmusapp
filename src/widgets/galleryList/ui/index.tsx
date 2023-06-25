import React, {useEffect} from 'react';
import {Heading, ScrollView, View} from 'native-base';
import {observer} from 'mobx-react-lite';
import tw from 'twrnc';

import {galleryModel, PreviewItem} from '@entities/gallery';

interface GalleryListProps {}

export const GalleryList: React.FC<GalleryListProps> = observer(() => {
  useEffect(() => {
    galleryModel.fetchPreviewList();
  }, []);

  const galleries = galleryModel.previewList;

  return (
    <View style={tw`flex-1`}>
      <Heading style={tw`w-100 px-2 py-1 text-lg`}>Galleries</Heading>

      {!!galleries.length && (
        <ScrollView style={tw`flex-1`}>
          {galleries.map(g => (
            <PreviewItem key={g.id} {...g} />
          ))}
        </ScrollView>
      )}
    </View>
  );
});
