import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  summaryScreenWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  header: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 48,
  },

  imagePreviewTitle: {
    fontSize: 24,
  },

  closeButtonBox: {
    position: 'absolute',
    top: '50%',
    left: 24,
    transform: [{ translateY: -12 }],
  },

  buttonsContainer: {
    marginTop: 20,
    width: '100%',
    gap: 10,
    alignItems: 'center',
  },

  imageWrapper: {
    position: 'relative',
    width: 275,
    height: 351,
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: 'rgba(14,13,13,0.35)',
  },

  verticalDashedLine: {
    position: 'absolute',
    top: 0,
    left: -20,
    width: 1,
    height: 351,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#000',
  },

  verticalMeasure: {
    position: 'absolute',
    top: '50%',
    left: -50,
    transform: [{ translateY: -30 }, { rotate: '-90deg' }],
    textAlign: 'center',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    width: 60,
  },

  horizontalDashedLine: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    width: 275,
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#000',
  },

  horizontalMeasure: {
    position: 'absolute',
    bottom: -27,
    left: '50%',
    transform: [{ translateX: -30 }],
    textAlign: 'center',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    width: 60,
    zIndex: 1,
  },

  makePhotoAgainButtonWrapper: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 22,
  },

  makePhotoAgainButtonText: {
    fontSize: 16,
  },
});
