import { Camera, CameraType, FaceDetectionResult } from 'expo-camera';
import { useState } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

import { styles } from './CameraScreen.styles';

const CameraScreen = () => {
  const [type, setType] = useState(CameraType.back);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const toggleCameraType = () => {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const handleFacesDetected = ({ faces }: FaceDetectionResult) => {
    const face = faces[0] as any;
    if (!face) return;
    console.log('=====================');
    console.log('left eye open probability', face.leftEyeOpenProbability);
    console.log('right eye open probability', face.rightEyeOpenProbability);
    console.log('smiling probability', face.smilingProbability);
    console.log('yaw angle', face.yawAngle);
    console.log('roll angle', face.rollAngle);
    console.log('=====================');
  };

  if (!permission) {
    return (
      <View>
        <Text>Waiting for permission...</Text>
      </View>
    );
  }

  if (permission.granted === false) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button title="Allow Camera" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.cameraScreenWrapper}>
      <Camera type={type} style={styles.camera} onFacesDetected={handleFacesDetected}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
