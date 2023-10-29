import { useRouter } from 'expo-router';
import React from 'react';
import { View, Image, useWindowDimensions } from 'react-native';

import { styles } from './SummaryScreen.styles';
import Button from '../../components/Button/Button';
import { navigationRoutes } from '../../constants';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { base64ToDataUri } from '../../functions';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { savePictureThunk } from '../../redux/thunks/imageThunk';

const SummaryScreen = () => {
  const dispatch = useAppDispatch();

  const { width } = useWindowDimensions();

  const router = useRouter();

  const auth = useAuth();

  const processedImageBase64 = useAppSelector((state) => state.image.processedImageBase64);

  const selectedDocument = useAppSelector((state) => state.image.selectedDocument);

  const handleSavePicture = () => {
    if (auth?.session?.user.id && processedImageBase64 && selectedDocument) {
      dispatch(
        savePictureThunk({
          userId: auth.session.user.id,
          imageBase64: processedImageBase64,
          requiredHeight: selectedDocument.requiredHeight,
          requiredWidth: selectedDocument.requiredWidth,
          callback: () => router.push(navigationRoutes.home),
        }),
      );
    }
  };

  const handleGoToHome = () => {
    router.push(navigationRoutes.home);
  };

  if (!selectedDocument) return null;

  return (
    <View style={styles.summaryScreenWrapper}>
      {processedImageBase64 && (
        <Image
          source={{ uri: base64ToDataUri(processedImageBase64) }}
          style={{
            width: width - 40,
            height:
              (width - 40) * (selectedDocument.requiredHeight / selectedDocument.requiredWidth),
          }}
        />
      )}
      <View style={styles.buttonsContainer}>
        <Button text="Zapisz zdjęcie" onPress={handleSavePicture} />
        <Button text="Anuluj" onPress={handleGoToHome} secondary />
      </View>
    </View>
  );
};

export default SummaryScreen;
