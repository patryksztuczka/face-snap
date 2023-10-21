import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { navigationRoutes } from '../../constants';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { base64ToDataUri } from '../../functions';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { savePictureThunk } from '../../redux/thunks/imageThunk';

const SummaryScreen = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const auth = useAuth();

  const processedImageBase64 = useAppSelector((state) => state.image.processedImageBase64);

  const handleSavePicture = () => {
    if (auth?.session?.user.id && processedImageBase64) {
      dispatch(
        savePictureThunk({
          userId: auth.session.user.id,
          imageBase64: processedImageBase64,
          callback: () => router.push(navigationRoutes.home),
        }),
      );
    }
  };

  return (
    <View>
      {processedImageBase64 && (
        <Image
          source={{ uri: base64ToDataUri(processedImageBase64) }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      )}
      <TouchableOpacity onPress={handleSavePicture}>
        <Text>Save photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SummaryScreen;
