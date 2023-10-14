import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

import { navigationRoutes } from '../../constants';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { supabase } from '../../supabaseClient';

const HomeScreen = () => {
  const { auth } = supabase;

  const session = useAuth();

  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await auth.signOut();
    if (error) {
      console.log(error);
    }
  };

  const goToCamera = () => {
    router.push(navigationRoutes.camera);
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Hello, {session?.session?.user.email}</Text>
      <Button title="Go to camera" onPress={goToCamera} />
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
