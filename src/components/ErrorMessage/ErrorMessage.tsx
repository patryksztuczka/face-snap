import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './ErrorMessage.styles';
import { IErrorMessageProps } from './ErrorMessage.types';
import ErrorIcon from '../../assets/icons/ErrorIcon';
import IconBox from '../IconBox/IconBox';

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
