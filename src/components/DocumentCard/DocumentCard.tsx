import { useFonts } from 'expo-font';
import React, { FC } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import { styles } from './DocumentCard.styles';
import { IDocumentCardProps } from './DocumentCard.types';
import { useAppDispatch } from '../../hooks/useRedux';
import { setDocument } from '../../redux/features/imageSlice';

const DocumentCard: FC<IDocumentCardProps> = ({ document, pickImage, goToCamera }) => {
  const [fontsLoaded] = useFonts({
    'DM Sans 700': require('../../assets/fonts/DMSans-Bold.ttf'),
    'DM Sans 500': require('../../assets/fonts/DMSans-Medium.ttf'),
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
  });

  const dispatch = useAppDispatch();

  const { title, subtitle } = document;

  const handleMakePhoto = () => {
    dispatch(setDocument(document));
    goToCamera();
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.documentCardWrapper}>
      <ImageBackground
        source={require('../../assets/images/card-background.png')}
        style={styles.backgroundImage}
        imageStyle={{
          borderRadius: 20,
        }}>
        <Image
          source={require('../../assets/images/poland-emblem.png')}
          style={styles.emblemImage}
        />
        <View style={styles.header}>
          <View style={styles.headerTextSection}>
            <Text
              style={{
                ...styles.title,
                fontFamily: 'DM Sans 700',
              }}>
              {title}
            </Text>
            <Text
              style={{
                ...styles.subtitle,
                fontFamily: 'DM Sans 400',
              }}>
              {subtitle}
            </Text>
          </View>
          <View style={styles.emblemWrapper}>
            <Image
              source={require('../../assets/images/poland-flag.png')}
              style={styles.flagImage}
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={styles.makePhotoButton} onTouchEnd={handleMakePhoto}>
            <Text style={{ ...styles.buttonText, fontFamily: 'DM Sans 500' }}>Zrób zdjęcie</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DocumentCard;
