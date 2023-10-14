import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navigationBarWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#F9FAFB',
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
});
