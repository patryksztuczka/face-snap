import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './CameraError.styles';
import { ICameraErrorProps } from './CameraError.types';

const CameraError: FC<ICameraErrorProps> = ({ errorMessage }) => {
  return (
    <View style={styles.cameraErrorWrapper}>
      {errorMessage != null ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : (
        <Text style={styles.successMessage}>Wszystko OK</Text>
      )}
    </View>
  );
};

export default CameraError;
