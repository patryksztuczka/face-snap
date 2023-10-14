import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './HomeScreen.styles';
import DocumentCard from '../../components/DocumentCard/DocumentCard';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import PrimaryParagraph from '../../components/PrimaryParagraph/PrimaryParagraph';
import { navigationRoutes, polishId } from '../../constants';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { supabase } from '../../supabaseClient';

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
      <View style={styles.headerSection}>
        <PrimaryHeader text="Dokumenty" />
        <PrimaryParagraph text="Wybierz dokument, do którego chcesz wykonać zdjęcie." />
      </View>
      <View style={styles.documentCardsContainer}>
        <DocumentCard key={polishId.id} document={polishId} />
      </View>
      {/* <Text>Hello, {session?.session?.user.email}</Text> */}
      {/* <Button title="Log out" onPress={handleLogout} /> */}
    </View>
  );
};

export default HomeScreen;
