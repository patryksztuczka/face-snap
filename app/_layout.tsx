import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { AuthProvider } from '../src/context/AuthContext/AuthContext';
import { store } from '../src/redux/store';

const MainLayout = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  );
};

export default MainLayout;
