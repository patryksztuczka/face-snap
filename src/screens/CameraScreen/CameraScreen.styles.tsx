import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cameraScreenWrapper: {
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },

  header: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    height: 48,
  },

  closeButtonBox: {
    position: 'absolute',
    top: '50%',
    left: 24,
    transform: [{ translateY: -12 }],
  },

  camera: {
    position: 'relative',
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

  text: {
    fontSize: 18,
  },

  portraitShape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  faceBounds: {
    position: 'absolute',
    zIndex: 100,
    borderWidth: 3,
    borderColor: '#ddd',
  },

  eyePoint: {
    position: 'absolute',
    zIndex: 100,
    width: 4,
    height: 4,
    borderRadius: 9999,
    backgroundColor: '#f00',
  },
});
