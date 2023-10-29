import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cameraErrorWrapper: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
    height: 50,
    paddingTop: 15,
  },

  errorMessage: {
    color: '#E54335',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
