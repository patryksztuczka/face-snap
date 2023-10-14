import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from '../src/context/AuthContext/AuthContext';

const MainLayout = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </AuthProvider>
  );
};

export default MainLayout;
