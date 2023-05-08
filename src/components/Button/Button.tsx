import { View, Text } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

import { IButtonProps } from './Button.types';
import { styles } from './Button.styles';
import IconBox from '../IconBox/IconBox';

const Button = ({ text, onPress, secondary, icon, disabled }: IButtonProps) => {
  const [fontsLoaded] = useFonts({
    'DM Sans 500': require('../../assets/fonts/DMSans-Medium.ttf'),
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
      onTouchEnd={handleOnPress}
    >
      {icon && <IconBox>{icon()}</IconBox>}
      <Text
        style={[
          secondary ? styles.textSecondary : disabled ? styles.textDisabled : styles.textPrimary,
          { fontFamily: 'DM Sans 500' },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Button;
