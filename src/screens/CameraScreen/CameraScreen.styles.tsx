import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cameraScreenWrapper: {
    position: 'relative',
    width: '100%',
  },

  camera: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },

  buttonContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 50,
  },

  button: {
    backgroundColor: '#ff0',
  },

  text: {
    fontSize: 18,
  },

  capturedPictureWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 100,
  },

  capturedPicture: {
    width: 300,
    height: 300,
  },
});
