import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';

import { AuthProvider } from '../src/context/AuthContext/AuthContext';

const MainLayout = () => {
  return (
    <AuthProvider>
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </AuthProvider>
  );
};

export default MainLayout;
