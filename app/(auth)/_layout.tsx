import { Slot } from 'expo-router';
import { View, StatusBar } from 'react-native';

const GuestLayout = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Slot />
    </View>
  );
};

export default GuestLayout;
