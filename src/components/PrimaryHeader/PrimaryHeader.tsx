import { useFonts } from 'expo-font';
import React, { FC } from 'react';
import { Text } from 'react-native';

import { styles } from './PrimaryHeader.styles';
import { IPrimaryHeaderProps } from './PrimaryHeader.types';

const PrimaryHeader: FC<IPrimaryHeaderProps> = ({ text }) => {
  const [fontsLoaded] = useFonts({
    'DM Sans 500': require('../../assets/fonts/DMSans-Medium.ttf'),
  });

  if (!fontsLoaded) return null;

  return <Text style={{ ...styles.header, fontFamily: 'DM Sans 500' }}>{text}</Text>;
};

export default PrimaryHeader;
