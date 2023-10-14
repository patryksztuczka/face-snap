import { Link } from 'expo-router';
import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { styles } from './NavigationButton.styles';
import { INavigationButtonProps } from './NavigationButton.types';
import IconBox from '../IconBox/IconBox';

const NavigationButton: FC<INavigationButtonProps> = ({ navigationOption, isActive }) => {
  const { label, path, icon, activeIcon } = navigationOption;

  return (
    <Link href={path}>
      <View style={styles.navigationButtonWrapper}>
        <IconBox>{isActive ? activeIcon() : icon()}</IconBox>
        <Text style={isActive ? styles.navigationButtonLabelActive : styles.navigationButtonLabel}>
          {label}
        </Text>
      </View>
    </Link>
  );
};

export default NavigationButton;
