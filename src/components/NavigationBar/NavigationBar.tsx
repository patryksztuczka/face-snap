import { usePathname } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { styles } from './NavigationBar.styles';
import { navigationBarOptions } from '../../constants';
import NavigationButton from '../NavigationButton/NavigationButton';

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <View style={styles.navigationBarWrapper}>
      {navigationBarOptions.map((option) => (
        <NavigationButton
          key={option.path}
          navigationOption={option}
          isActive={pathname === option.path}
        />
      ))}
    </View>
  );
};

export default NavigationBar;
