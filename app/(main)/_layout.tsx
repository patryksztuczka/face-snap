import { Slot } from 'expo-router';
import { View, StatusBar, SafeAreaView } from 'react-native';

const PrivateLayout = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </View>
  );
};

export default PrivateLayout;
