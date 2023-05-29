import { Slot } from 'expo-router';

import { AuthProvider } from '../src/context/AuthContext/AuthContext';

const MainLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default MainLayout;
