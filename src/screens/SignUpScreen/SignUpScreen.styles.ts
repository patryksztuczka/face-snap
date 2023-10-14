import { Platform, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  signUpScreenWrapper: {
    width: '100%',
    paddingTop: 12,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },

  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  title: {
    marginTop: 32,
    marginBottom: 8,
    fontSize: 40,
  },

  paragraph: {
    fontSize: 16,
    marginBottom: 32,
  },

  inputsWrapper: {
    width: '100%',
    gap: 12,
  },

  policyText: {
    paddingTop: 32,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 24,
    fontSize: 14,
    textAlign: 'center',
  },

  link: {
    textDecorationLine: 'underline',
  },

  or: {
    paddingTop: 32,
    paddingBottom: 32,
    textAlign: 'center',
  },
});
