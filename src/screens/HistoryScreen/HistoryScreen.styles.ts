import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  historyScreenWrapper: {
    flex: 1,
  },

  headerSection: {
    paddingHorizontal: 24,
  },

  historyList: {
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    borderRadius: 16,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },

  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});
