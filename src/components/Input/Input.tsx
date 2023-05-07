import { View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

import { styles } from './Input.styles';
import { IInputProps } from './Input.types';
import EyeIcon from '../../assets/icons/EyeIcon';

const Input = ({ type, placeholder, value, onChange }: IInputProps) => {
  const [fontsLoaded] = useFonts({
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        secureTextEntry={type === 'password' ? true : false}
        style={{ ...styles.inputArea, fontFamily: 'DM Sans 400' }}
        placeholder={placeholder}
        placeholderTextColor="#778088"
        value={value}
        onChangeText={onChange}
      />
      {type === 'password' && (
        <View style={styles.iconBox}>
          <EyeIcon />
        </View>
      )}
    </View>
  );
};

export default Input;
