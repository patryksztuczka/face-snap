import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  welcomePageWrapper: {
    height: '100%',
    justifyContent: 'flex-end',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    paddingLeft: 24,
    paddingRight: 24,
  },

  logo: {
    width: 178,
    height: 168,
  },

  logoWrapper: {
    alignItems: 'center',
    paddingBottom: 174,
  },

  buttonsWrapper: {
    gap: 12,
    marginTop: 24,
    marginBottom: 24,
  },

  policyText: {
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 14,
    textAlign: 'center',
  },

  link: {
    textDecorationLine: 'underline',
  },
});
