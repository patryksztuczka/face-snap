import { View, Text, Button } from 'react-native';
import React from 'react';
import { supabase } from '../../supabaseClient';

const HomeScreen = () => {
  const { auth } = supabase;

  const handleLogout = async () => {
    const { error } = await auth.signOut();
    if (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
