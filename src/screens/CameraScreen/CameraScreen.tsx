import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import { FaceDetectorClassifications, FaceDetectorMode, FaceFeature } from 'expo-face-detector';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';

import { styles } from './CameraScreen.styles';
import CameraFlipIcon from '../../assets/icons/CameraFlipIcon';
import Button from '../../components/Button/Button';
import CameraError from '../../components/CameraError/CameraError';
import { navigationRoutes, reduxStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { processImageThunk } from '../../redux/thunks/imageThunk';

const CameraScreen = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { width, height } = useWindowDimensions();

  const cameraWrapperRef = useRef<View>(null);

  const cameraRef = useRef<Camera>(null);

  const [type, setType] = useState(CameraType.back);

  const [capturedPicture, setCapturedPicture] = useState<CameraCapturedPicture | null>(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [detectedFace, setDetectedFace] = useState<FaceFeature | null>(null);

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
    if (faces.length > 1) {
      setFaceDetectionError('Wykryto więcej niż jedną twarz');
      return;
    }

    const face = faces[0] as FaceFeature;

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
        return;
      }

      console.log('=====================');
      console.log('left eye open probability', leftEyeOpenProbability);
      console.log('right eye open probability', rightEyeOpenProbability);
      console.log('smiling probability', face.smilingProbability);
      console.log('yaw angle', face.yawAngle);
      console.log('roll angle', face.rollAngle);
      console.log('=====================');
    } else {
      setDetectedFace(null);
      setFaceDetectionError('Nie wykryto twarzy');
    }
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
        <View style={styles.capturedPictureWrapper}>
          {processImageStatus === reduxStatus.pending ? (
            <View
              style={{
                ...styles.processingOverlay,
                width,
                height,
              }}>
              <ActivityIndicator size="large" color="#aaa" />
              <Text style={styles.processingOverlayText}>Przetwarzanie zdjęcia...</Text>
            </View>
          ) : null}
          <Image
            source={{ uri: capturedPicture.uri }}
            style={{
              width: width - 40,
              height:
                (width - 40) * (selectedDocument.requiredHeight / selectedDocument.requiredWidth),
            }}
          />
          <View style={styles.capturedPictureButtonsContainer}>
            <Button text="Przejdź dalej" onPress={proccessPicture} />
            <Button text="Powtórz zdjęcie" onPress={takePictureAgain} secondary />
          </View>
        </View>
      )}
      <CameraError errorMessage={faceDetectionError} />
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
        }}
        onFacesDetected={handleFacesDetected}>
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
