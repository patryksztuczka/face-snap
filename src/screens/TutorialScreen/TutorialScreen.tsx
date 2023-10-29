import React from 'react';
import { View } from 'react-native';

import { styles } from './TutorialScreen.styles';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import PrimaryParagraph from '../../components/PrimaryParagraph/PrimaryParagraph';

const TutorialScreen = () => {
  return (
    <View style={styles.tutorialScreenWrapper}>
      <View style={styles.headerSection}>
        <PrimaryHeader text="Samouczek" />
        <PrimaryParagraph text="Dowiedz się w jaki sposób wykonać jak najlepsze zdjęcie do dokumentów." />
      </View>
    </View>
  );
};

export default TutorialScreen;
