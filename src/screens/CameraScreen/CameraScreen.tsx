import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import {
  FaceDetectorClassifications,
  FaceDetectorLandmarks,
  FaceDetectorMode,
} from 'expo-face-detector';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, useWindowDimensions } from 'react-native';

import { styles } from './CameraScreen.styles';
import CameraFlipIcon from '../../assets/icons/CameraFlipIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
import PortraitShape from '../../assets/icons/PortraitShape';
import Button from '../../components/Button/Button';
import CameraError from '../../components/CameraError/CameraError';
import PhotoPreview from '../../components/PhotoPreview/PhotoPreview';
import { navigationRoutes, reduxStatus } from '../../constants';
import { useAppSelector } from '../../hooks/useRedux';
import { IFaceFeature } from '../../types/IFaceFeature';

const CameraScreen = () => {
  const router = useRouter();

  const { width } = useWindowDimensions();

  const cameraWrapperRef = useRef<View>(null);

  const cameraRef = useRef<Camera>(null);

  const [fontsLoaded] = useFonts({
    'DM Sans 700': require('../../assets/fonts/DMSans-Bold.ttf'),
  });

  const [type, setType] = useState(CameraType.back);

  const [capturedPicture, setCapturedPicture] = useState<CameraCapturedPicture | null>(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [detectedFace, setDetectedFace] = useState<IFaceFeature | null>(null);

  const [faceDetectionError, setFaceDetectionError] = useState<string | null>(null);

  const selectedDocument = useAppSelector((state) => state.image.selectedDocument);

  const processImageStatus = useAppSelector((state) => state.image.processImageStatus);

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

  const backToHomeScreen = () => {
    router.push(navigationRoutes.home);
  };

  const handleFacesDetected = ({ faces }: FaceDetectionResult) => {
    if (faces.length > 1) {
      setFaceDetectionError('Wykryto więcej niż jedną twarz');
      return;
    }

    const face = faces[0] as IFaceFeature;

    if (face) {
      const {
        leftEyeOpenProbability,
        rightEyeOpenProbability,
        smilingProbability,
        yawAngle,
        rollAngle,
      } = face;
      setDetectedFace(face);
      setFaceDetectionError(null);

      if (leftEyeOpenProbability === undefined || rightEyeOpenProbability === undefined) {
        setFaceDetectionError('Nie wykryto oczu');
        return;
      }

      if (leftEyeOpenProbability < 0.5 || rightEyeOpenProbability < 0.5) {
        setFaceDetectionError('Oczy muszą być otwarte');
        return;
      }

      if (smilingProbability === undefined) {
        setFaceDetectionError('Nie rozpoznano wyrazu twarzy');
        return;
      }

      if (smilingProbability > 0.15) {
        setFaceDetectionError('Wyraz twarzy musi być neutralny');
        return;
      }

      if (yawAngle === undefined || rollAngle === undefined) {
        setFaceDetectionError('Nie rozpoznano pozycji twarzy');
        return;
      }

      if (yawAngle > 4) {
        setFaceDetectionError('Twarz musi być skierowana prosto do kamery');
        return;
      }

      if (rollAngle > 4) {
        setFaceDetectionError('Twarz nie może być uniesiona ani opuszczona');
        // return;
      }

      // console.log('=====================');
      // // console.log(faces);
      // console.log('left eye open probability', leftEyeOpenProbability);
      // console.log('right eye open probability', rightEyeOpenProbability);
      // console.log('smiling probability', face.smilingProbability);
      // console.log('yaw angle', face.yawAngle);
      // console.log('roll angle', face.rollAngle);
      // console.log('nose position', face.NOSE_BASE);
      // console.log('right eye postion', face.RIGHT_EYE);
      // console.log('left eye postion', face.LEFT_EYE);
      // console.log('mouth position', face.BOTTOM_MOUTH);
      // console.log('left ear position', face.LEFT_EAR);
      // console.log('right ear position', face.RIGHT_EAR);
      // console.log('gaze probability', countGazeProbability(face));
      // console.log('=====================');
    } else {
      setDetectedFace(null);
      setFaceDetectionError('Nie wykryto twarzy');
    }
  };

  if (!fontsLoaded) return null;

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
        <Text>Brak uprawnień do kamery</Text>
        <Button text="Allow Camera" onPress={requestPermission} />
      </View>
    );
  }

  if (selectedDocument == null) {
    return (
      <View>
        <Text>Nie wybrano dokumentu</Text>
      </View>
    );
  }

  return (
    <View ref={cameraWrapperRef} style={styles.cameraScreenWrapper}>
      {capturedPicture != null && (
        <PhotoPreview
          capturedPicture={capturedPicture}
          isProcessing={processImageStatus === reduxStatus.pending}
          selectedDocument={selectedDocument}
          takePictureAgain={takePictureAgain}
        />
      )}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButtonBox} onPress={backToHomeScreen}>
          <CloseIcon />
        </TouchableOpacity>
        <CameraError errorMessage={faceDetectionError} />
      </View>
      <Camera
        ref={cameraRef}
        type={type}
        style={{
          ...styles.camera,
          width,
          height: width * (selectedDocument.requiredHeight / selectedDocument.requiredWidth),
        }}
        faceDetectorSettings={{
          mode: FaceDetectorMode.accurate,
          runClassifications: FaceDetectorClassifications.all,
          minDetectionInterval: 1000,
          detectLandmarks: FaceDetectorLandmarks.all,
        }}
        onFacesDetected={handleFacesDetected}>
        <View style={styles.portraitShape}>
          <PortraitShape />
        </View>
        {/* <View
          style={{
            ...styles.faceBounds,
            top: detectedFace?.bounds.origin.y,
            left: detectedFace?.bounds.origin.x,
            width: detectedFace?.bounds.size.width,
            height: detectedFace?.bounds.size.height,
          }}
        />
        <View
          style={{
            ...styles.eyePoint,
            top: detectedFace?.LEFT_EYE?.y,
            left: detectedFace?.LEFT_EYE?.x,
          }}
        /> */}
        {/* <View style={styles.detectedFaceInfoContainer}>
          {detectedFace ? (
            <>
              <Text style={styles.faceProperty}>
                Left eye open probability: {detectedFace.leftEyeOpenProbability}
              </Text>
              <Text style={styles.faceProperty}>
                Right eye open probability: {detectedFace.rightEyeOpenProbability}
              </Text>
              <Text style={styles.faceProperty}>
                Smiling probability: {detectedFace.smilingProbability}
              </Text>
              <Text style={styles.faceProperty}>Yaw angle: {detectedFace.yawAngle}</Text>
              <Text style={styles.faceProperty}>Roll angle: {detectedFace.rollAngle}</Text>
            </>
          ) : (
            <Text style={styles.faceProperty}>Nie wykryto twarzy</Text>
          )}
        </View> */}
      </Camera>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.flipCameraButton} onPress={toggleCameraType}>
          <CameraFlipIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.takePhotoButton,
            opacity: faceDetectionError ? 0.5 : 1,
          }}
          onPress={takePicture}
          disabled={!!faceDetectionError}
        />
      </View>
    </View>
  );
};

export default CameraScreen;
