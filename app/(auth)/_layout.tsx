import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';

const GuestLayout = () => {
  return (
    <View style={styles.guestTemplateWrapper}>
      <Slot />
    </View>
  );
};

export default GuestLayout;

const styles = StyleSheet.create({
  guestTemplateWrapper: {
    paddingTop: 12,
    paddingLeft: 24,
    paddingRight: 24,
  },
});
