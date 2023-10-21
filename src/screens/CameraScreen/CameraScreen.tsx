import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { View, Button, TouchableOpacity, Text, Image } from 'react-native';

import { styles } from './CameraScreen.styles';
import { navigationRoutes } from '../../constants';
import { useAppDispatch } from '../../hooks/useRedux';
import { processImageThunk } from '../../redux/thunks/imageThunk';

const CameraScreen = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const cameraRef = useRef<Camera>(null);

  const [type, setType] = useState(CameraType.back);

  const [capturedPicture, setCapturedPicture] = useState<CameraCapturedPicture | null>(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const toggleCameraType = () => {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const takePicture = async () => {
    if (!cameraRef.current) return;

    const picture = await cameraRef.current.takePictureAsync({
      base64: true,
    });

    setCapturedPicture(picture);
  };

  const takePictureAgain = () => {
    setCapturedPicture(null);
  };

  const proccessPicture = async () => {
    if (!capturedPicture) return;

    if (!capturedPicture.base64) return;

    dispatch(
      processImageThunk({
        imageBase64: capturedPicture.base64,
        callback: () => router.push(navigationRoutes.summary),
      }),
    );
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
      {capturedPicture != null && (
        <View style={styles.capturedPictureWrapper}>
          <Image source={{ uri: capturedPicture.uri }} style={styles.capturedPicture} />
          <TouchableOpacity style={styles.button} onPress={takePictureAgain}>
            <Text style={styles.text}>Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={proccessPicture}>
            <Text style={styles.text}>Process</Text>
          </TouchableOpacity>
        </View>
      )}
      <Camera
        ref={cameraRef}
        type={type}
        style={styles.camera}
        // onFacesDetected={handleFacesDetected}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Shot</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
