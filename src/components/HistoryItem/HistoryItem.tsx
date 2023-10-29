import React, { FC } from 'react';
import { Image, View } from 'react-native';

import { IHistoryItemProps } from './HistoryItem.types';

const HistoryItem: FC<IHistoryItemProps> = ({ savedImage }) => {
  const { imageUrl } = savedImage;

  return (
    <View>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default HistoryItem;
