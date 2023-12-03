import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { styles } from './NavigationButton.styles';
import { INavigationButtonProps } from './NavigationButton.types';
import IconBox from '../IconBox/IconBox';

const NavigationButton: FC<INavigationButtonProps> = ({ navigationOption, isActive }) => {
  const [fontsLoaded] = useFonts({
    'DM Sans 700': require('../../assets/fonts/DMSans-Bold.ttf'),
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
  });

  const { label, path, icon, activeIcon } = navigationOption;

  if (!fontsLoaded) return null;

  return (
    <Link href={path}>
      <View style={styles.navigationButtonWrapper}>
        <IconBox>{isActive ? activeIcon() : icon()}</IconBox>
        <Text
          style={
            isActive
              ? {
                  ...styles.navigationButtonLabelActive,
                  fontFamily: 'DM Sans 700',
                }
              : {
                  ...styles.navigationButtonLabel,
                  fontFamily: 'DM Sans 400',
                }
          }>
          {label}
        </Text>
      </View>
    </Link>
  );
};

export default NavigationButton;
