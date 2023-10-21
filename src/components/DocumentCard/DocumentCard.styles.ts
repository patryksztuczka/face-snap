import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  documentCardWrapper: {
    width: 314,
    height: 460,
  },

  backgroundImage: {
    position: 'relative',
    flex: 1,
    justifyContent: 'space-between',
    resizeMode: 'cover',
    padding: 20,
  },

  emblemImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderBottomRightRadius: 20,
  },

  title: {
    fontSize: 24,
    color: 'white',
    lineHeight: 32,
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
    letterSpacing: -0.072,
  },

  subtitle: {
    fontSize: 16,
    color: 'white',
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
    letterSpacing: 0.048,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
  },

  headerTextSection: {
    flex: 1,
  },

  flagImage: {
    borderRadius: 9999,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },

  buttonWrapper: {
    position: 'relative',
  },

  makePhotoButton: {
    height: 52,
    borderRadius: 9999,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 20,
  },

  popupWrapper: {
    position: 'absolute',
    top: -84,
    right: 0,
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
  },

  popupOption: {
    fontSize: 16,
  },
});
