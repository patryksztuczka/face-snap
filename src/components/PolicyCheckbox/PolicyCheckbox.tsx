import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './PolicyCheckbox.styles';
import CheckedCheckboxIcon from '../../assets/icons/CheckedCheckboxIcon';
import UncheckedCheckboxIcon from '../../assets/icons/UncheckedCheckobxIcon';
import IconBox from '../IconBox/IconBox';

const PolicyCheckbox = () => {
  const [fontsLoaded] = useFonts({
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
  });

  const [isCheked, setIsCheked] = useState(false);

  const handleCheckboxClick = () => {
    setIsCheked(!isCheked);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.policyCheckboxWrapper} onTouchEnd={handleCheckboxClick}>
      <IconBox>{isCheked ? <CheckedCheckboxIcon /> : <UncheckedCheckboxIcon />}</IconBox>
      <Text style={{ ...styles.description, fontFamily: 'DM Sans 400' }}>
        Akceptuję regulami i politykę prywatności.
      </Text>
    </View>
  );
};

export default PolicyCheckbox;
