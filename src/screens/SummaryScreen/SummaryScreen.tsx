import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import { styles } from './SummaryScreen.styles';
import CloseIcon from '../../assets/icons/CloseIcon';
import DownloadIcon from '../../assets/icons/DownloadIcon';
import ReloadIcon from '../../assets/icons/ReloadIcon';
import UploadIcon from '../../assets/icons/UploadIcon';
import Button from '../../components/Button/Button';
import { navigationRoutes } from '../../constants';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { base64ToDataUri } from '../../functions/base64ToDataUri';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { savePictureThunk } from '../../redux/thunks/imageThunk';

const SummaryScreen = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const auth = useAuth();

  const [fontsLoaded] = useFonts({
    'DM Sans 700': require('../../assets/fonts/DMSans-Bold.ttf'),
    'DM Sans 500': require('../../assets/fonts/DMSans-Medium.ttf'),
  });

  const processedImageBase64 = useAppSelector((state) => state.image.processedImageBase64);

  const selectedDocument = useAppSelector((state) => state.image.selectedDocument);

  const handleSaveInGallery = () => {};

  const handleSavePicture = () => {
    if (auth?.session?.user.id && processedImageBase64 && selectedDocument) {
      dispatch(
        savePictureThunk({
          userId: auth.session.user.id,
          imageBase64: processedImageBase64,
          documentId: selectedDocument.id,
          callback: () => router.push(navigationRoutes.home),
        }),
      );
    }
  };

  const handleGoToHome = () => {
    router.push(navigationRoutes.home);
  };

  const handlebackToCamera = () => {
    router.push(navigationRoutes.camera);
  };

  if (!fontsLoaded) return null;

  if (!selectedDocument) return null;

  return (
    <View style={styles.summaryScreenWrapper}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButtonBox} onPress={handleGoToHome}>
          <CloseIcon fill={'#000'} />
        </TouchableOpacity>
        <Text style={{ ...styles.imagePreviewTitle, fontFamily: 'DM Sans 700' }}>Podsumowanie</Text>
      </View>
      {processedImageBase64 && (
        <View style={styles.imageWrapper}>
          <View style={styles.verticalDashedLine} />
          <Text style={styles.verticalMeasure}>{`${selectedDocument.requiredHeight} mm`}</Text>
          <Image
            source={{ uri: base64ToDataUri(processedImageBase64) }}
            style={{
              width: 275,
              height: 351,
              borderRadius: 12,
            }}
          />
          <Text style={styles.horizontalMeasure}>{`${selectedDocument.requiredWidth} mm`}</Text>

          <View style={styles.horizontalDashedLine} />
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handlebackToCamera}>
          <View style={styles.makePhotoAgainButtonWrapper}>
            <ReloadIcon />
            <Text style={{ ...styles.makePhotoAgainButtonText, fontFamily: 'DM Sans 700' }}>
              Zrób zdjęcie ponownie
            </Text>
          </View>
        </TouchableOpacity>
        <Button
          text="Pobierz zdjęcie"
          onPress={handleSaveInGallery}
          icon={DownloadIcon}
          secondary
        />
        <Button text="Zapisz w aplikacji" onPress={handleSavePicture} icon={UploadIcon} />
      </View>
    </View>
  );
};

export default SummaryScreen;
