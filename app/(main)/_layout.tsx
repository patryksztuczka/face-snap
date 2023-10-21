import { Slot, usePathname } from 'expo-router';
import { View, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationBar from '../../src/components/NavigationBar/NavigationBar';
import { navigationRoutes } from '../../src/constants';

const PrivateLayout = () => {
  const pathname = usePathname();

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          ...styles.contentWrapper,
          paddingBottom: pathname === navigationRoutes.camera ? 0 : 80,
        }}>
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
  },
});
