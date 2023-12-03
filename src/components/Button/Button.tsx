import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { styles } from './Button.styles';
import { IButtonProps } from './Button.types';
import IconBox from '../IconBox/IconBox';

const Button = ({ text, onPress, secondary, icon, disabled, isLoading }: IButtonProps) => {
  const [fontsLoaded] = useFonts({
    'DM Sans 700': require('../../assets/fonts/DMSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleOnPress = () => {
    if (disabled) return;
    onPress();
  };

  return (
    <View
      style={
        secondary
          ? styles.buttonWrapperSecondary
          : disabled
          ? styles.buttonWrapperDisabled
          : styles.buttonWrapperPrimary
      }
      onTouchEnd={handleOnPress}>
      {icon && <IconBox>{icon()}</IconBox>}
      <Text
        style={[
          secondary ? styles.textSecondary : disabled ? styles.textDisabled : styles.textPrimary,
          { fontFamily: 'DM Sans 700' },
        ]}>
        {isLoading ? <ActivityIndicator size="small" color="#fff" /> : text}
      </Text>
    </View>
  );
};

export default Button;
