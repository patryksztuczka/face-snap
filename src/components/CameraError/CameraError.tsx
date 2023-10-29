import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './CameraError.styles';
import { ICameraErrorProps } from './CameraError.types';
import ErrorIcon from '../../assets/icons/ErrorIcon';

const CameraError: FC<ICameraErrorProps> = ({ errorMessage }) => {
  return (
    <View style={styles.cameraErrorWrapper}>
      {errorMessage != null ? (
        <>
          <ErrorIcon />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </>
      ) : null}
    </View>
  );
};

export default CameraError;
