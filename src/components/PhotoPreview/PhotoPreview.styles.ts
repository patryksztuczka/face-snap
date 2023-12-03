import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  capturedPictureWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    zIndex: 100,
  },

  header: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  closeButtonBox: {
    position: 'absolute',
    top: '50%',
    left: 24,
    transform: [{ translateY: -12 }],
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
  },

  processingOverlayText: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
  },

  imagePreviewTitle: {
    fontSize: 24,
  },
});
