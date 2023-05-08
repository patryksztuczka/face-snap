import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

import { styles } from './Input.styles';
import { IInputProps } from './Input.types';
import EyeIcon from '../../assets/icons/EyeIcon';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import EyeSlashIcon from '../../assets/icons/EyeSlashIcon';

const Input = ({ type, placeholder, value, onChange, error }: IInputProps) => {
  const [fontsLoaded] = useFonts({
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <View style={styles.inputWrapper}>
        <TextInput
          secureTextEntry={type !== 'password' ? false : isPasswordVisible ? false : true}
          style={{ ...styles.inputArea, fontFamily: 'DM Sans 400' }}
          placeholder={placeholder}
          placeholderTextColor="#778088"
          value={value}
          onChangeText={onChange}
        />
        {type === 'password' && (
          <View style={styles.iconBox} onTouchEnd={handleTogglePassword}>
            {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
          </View>
        )}
      </View>
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default Input;
