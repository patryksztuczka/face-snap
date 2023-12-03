import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './HistoryItem.styles';
import { IHistoryItemProps } from './HistoryItem.types';
import { documents } from '../../constants';

const HistoryItem: FC<IHistoryItemProps> = ({ savedImage }) => {
  const { imageUrl } = savedImage;

  const document = documents.find((doc) => doc.id === savedImage.documentId);

  return (
    <View style={styles.historyItemWrapper}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ width: 162, height: 250, borderRadius: 16 }}
      />
      <Text style={styles.title}>{document?.title}</Text>
      <Text style={styles.createdAt}>{savedImage.createdAt}</Text>
    </View>
  );
};

export default HistoryItem;
