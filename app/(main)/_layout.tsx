import { Slot } from 'expo-router';
import { View, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationBar from '../../src/components/NavigationBar/NavigationBar';

const PrivateLayout = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.contentWrapper}>
        <Slot />
        <NavigationBar />
      </SafeAreaView>
    </View>
  );
};

export default PrivateLayout;

const styles = StyleSheet.create({
  contentWrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
    paddingBottom: 80,
  },
});
