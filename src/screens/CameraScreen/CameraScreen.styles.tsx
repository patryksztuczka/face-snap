import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cameraScreenWrapper: {
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },

  camera: {
    justifyContent: 'space-between',
  },

  detectedFaceInfoContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'transparent',
  },

  faceProperty: {
    color: '#fff',
  },

  buttonContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 100,
    height: 100,
    paddingBottom: 20,
  },

  goBackButton: {
    position: 'absolute',
    top: '50%',
    left: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 9999,
    transform: [{ translateY: -25 }],
  },

  flipCameraButton: {
    position: 'absolute',
    top: '50%',
    right: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 9999,
    transform: [{ translateY: -25 }],
  },

  takePhotoButton: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    borderRadius: 9999,
    borderWidth: 3,
    borderColor: '#ddd',
  },

  button: {},

  text: {
    fontSize: 18,
  },

  capturedPictureWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 100,
  },

  capturedPictureButtonsContainer: {
    marginTop: 20,
    width: '100%',
    gap: 10,
  },

  processingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    zIndex: 100,
  },

  processingOverlayText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#aaa',
    marginTop: 10,
  },
});
