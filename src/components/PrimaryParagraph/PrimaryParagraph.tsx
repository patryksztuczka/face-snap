import { useFonts } from 'expo-font';
import React, { FC } from 'react';
import { Text } from 'react-native';

import { styles } from './PrimaryParagraph.styles';
import { IPrimaryParagraphProps } from './PrimaryParagraph.types';

const PrimaryParagraph: FC<IPrimaryParagraphProps> = ({ text }) => {
  const [fontsLoaded] = useFonts({
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
  });

  if (!fontsLoaded) return null;
  return <Text style={{ ...styles.paragraph, fontFamily: 'DM Sans 400' }}>{text}</Text>;
};

export default PrimaryParagraph;
