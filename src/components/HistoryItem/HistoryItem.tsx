import { encode } from 'base64-arraybuffer';
import blobToBuffer from 'blob-to-buffer';
import React, { FC, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { IHistoryItemProps } from './HistoryItem.types';
import { base64ToDataUri } from '../../functions';

const HistoryItem: FC<IHistoryItemProps> = ({ savedImage }) => {
  const { image } = savedImage;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null);

  const getArrayBufferFromImage = async () => {
    try {
      setIsLoading(true);

      // if (image instanceof Blob) {
      //   console.log('jest blob');
      // }

      // const imageArrayBuffer = await image.arrayBuffer();

      blobToBuffer(image, function (err, buffer) {
        if (err) throw err;

        // buffer[0]; // => 1
        // buffer.readUInt8(1); // => 2

        setArrayBuffer(buffer);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getArrayBufferFromImage();
  }, []);

  return (
    <View>
      {!isLoading && arrayBuffer ? (
        <>
          <Text>HistoryItem</Text>
          <Image
            source={{
              uri: base64ToDataUri(encode(arrayBuffer)),
            }}
          />
        </>
      ) : (
        <Text>Ładowanie...</Text>
      )}
    </View>
  );
};

export default HistoryItem;
