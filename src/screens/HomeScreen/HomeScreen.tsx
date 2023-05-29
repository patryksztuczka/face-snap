import { View, Text, Button } from 'react-native';
import React from 'react';
import { supabase } from '../../supabaseClient';
import { useAuth } from '../../context/AuthContext/AuthContext';

const HomeScreen = () => {
  const { auth } = supabase;
  const session = useAuth();

  const handleLogout = async () => {
    const { error } = await auth.signOut();
    if (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Hello, {session?.session?.user.email}</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
