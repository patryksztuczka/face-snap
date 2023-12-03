import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cameraErrorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorMessage: {
    color: '#E54335',
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: 250,
    textAlign: 'center',
  },

  successMessage: {
    color: '#0E9F6E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
