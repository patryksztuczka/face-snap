import React from 'react';
import { View } from 'react-native';

import { styles } from './SettingsScreen.styles';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import PrimaryParagraph from '../../components/PrimaryParagraph/PrimaryParagraph';

const SettingsScreen = () => {
  return (
    <View style={styles.settingsScreenWrapper}>
      <View style={styles.headerSection}>
        <PrimaryHeader text="Ustawienia" />
        <PrimaryParagraph text="Dostosuj ustawienia aplikacji pod siebie." />
      </View>
    </View>
  );
};

export default SettingsScreen;
