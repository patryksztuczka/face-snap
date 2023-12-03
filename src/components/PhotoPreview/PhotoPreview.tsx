import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import React, { FC } from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { styles } from './PhotoPreview.styles';
import { IPhotoPreviewProps } from './PhotoPreview.types';
import CloseIcon from '../../assets/icons/CloseIcon';
import ReloadIcon from '../../assets/icons/ReloadIcon';
import { navigationRoutes } from '../../constants';
import { useAppDispatch } from '../../hooks/useRedux';
import { processImageThunk } from '../../redux/thunks/imageThunk';
import Button from '../Button/Button';

const PhotoPreview: FC<IPhotoPreviewProps> = ({
  isProcessing,
  capturedPicture,
  selectedDocument,
  takePictureAgain,
}) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { width, height } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'DM Sans 700': require('../../assets/fonts/DMSans-Bold.ttf'),
    'DM Sans 500': require('../../assets/fonts/DMSans-Medium.ttf'),
  });

  const backToHomeScreen = () => {
    router.push(navigationRoutes.home);
  };

  const proccessPicture = async () => {
    if (!capturedPicture) return;

    if (!capturedPicture.base64) return;

    dispatch(
      processImageThunk({
        imageBase64: capturedPicture.base64,
        callback: () => router.push(navigationRoutes.summary),
      }),
    );
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.capturedPictureWrapper}>
      {isProcessing ? (
        <View
          style={{
            ...styles.processingOverlay,
            width,
            height,
          }}>
          <ActivityIndicator size="large" color="fff" />
          <Text style={{ ...styles.processingOverlayText, fontFamily: 'DM Sans 700' }}>
            Trwa przetwarzanie Twojego zdjęcia
          </Text>
        </View>
      ) : null}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButtonBox} onPress={backToHomeScreen}>
          <CloseIcon fill={'#000'} />
        </TouchableOpacity>
        <Text style={{ ...styles.imagePreviewTitle, fontFamily: 'DM Sans 700' }}>
          Podgląd zdjęcia
        </Text>
      </View>
      <Image
        source={{ uri: capturedPicture.uri }}
        style={{
          borderRadius: 16,
          width: width - 40,
          height: (width - 40) * (selectedDocument.requiredHeight / selectedDocument.requiredWidth),
        }}
      />
      <View style={styles.capturedPictureButtonsContainer}>
        <Button
          text="Zrób zdjęcie ponownie"
          onPress={takePictureAgain}
          icon={ReloadIcon}
          secondary
        />
        <Button text="Przejdź dalej" onPress={proccessPicture} />
      </View>
    </View>
  );
};

export default PhotoPreview;
