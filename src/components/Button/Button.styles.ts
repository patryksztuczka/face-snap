import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonWrapperPrimary: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 50,
  },

  buttonWrapperSecondary: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 50,
  },

  buttonWrapperDisabled: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 0, 16, 0.05)',
    borderRadius: 50,
  },

  textPrimary: {
    color: '#fff',
    fontSize: 16,
  },

  textSecondary: {
    color: '#000',
    fontSize: 16,
  },

  textDisabled: {
    color: 'rgba(15, 0, 16, 0.4)',
    fontSize: 16,
  },
});
