import { View, Text } from 'react-native';
import React from 'react';

import { styles } from './ErrorMessage.styles';
import { IErrorMessageProps } from './ErrorMessage.types';
import IconBox from '../IconBox/IconBox';
import ErrorIcon from '../../assets/icons/ErrorIcon';

const ErrorMessage = ({ error }: IErrorMessageProps) => {
  return (
    <View style={styles.errorMessageWrapper}>
      <IconBox>
        <ErrorIcon />
      </IconBox>
      <Text style={styles.errorMessageText}>{error}</Text>
    </View>
  );
};

export default ErrorMessage;
