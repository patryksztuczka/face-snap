import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  historyItemWrapper: {
    position: 'relative',
    width: 162,
    height: 250,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'rgba(14,13,13,0.55)',
  },

  title: {
    position: 'absolute',
    bottom: 28,
    left: 14,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  createdAt: {
    position: 'absolute',
    bottom: 0,
    left: 14,
    fontSize: 12,
    color: '#fff',
  },
});
