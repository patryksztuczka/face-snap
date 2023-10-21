import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

import { styles } from './HomeScreen.styles';
import DocumentCard from '../../components/DocumentCard/DocumentCard';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import PrimaryParagraph from '../../components/PrimaryParagraph/PrimaryParagraph';
import { navigationRoutes, polishId } from '../../constants';
// import { useAuth } from '../../context/AuthContext/AuthContext';
import { useAppDispatch } from '../../hooks/useRedux';
import { getHelloWorldThunk, processImageThunk } from '../../redux/thunks/imageThunk';
// import { supabase } from '../../supabaseClient';

const HomeScreen = () => {
  // const { auth } = supabase;

  const dispatch = useAppDispatch();

  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      if (result.assets[0].base64) {
        dispatch(
          processImageThunk({
            imageBase64: result.assets[0].base64,
            callback: () => router.push(navigationRoutes.summary),
          }),
        );
      }
    }
  };

  const goToCamera = () => {
    router.push(navigationRoutes.camera);
  };

  // const handleLogout = async () => {
  //   const { error } = await auth.signOut();
  //   if (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch(getHelloWorldThunk());
  }, [dispatch]);

  return (
    <View>
      <View style={styles.headerSection}>
        <PrimaryHeader text="Dokumenty" />
        <PrimaryParagraph text="Wybierz dokument, do którego chcesz wykonać zdjęcie." />
      </View>
      <View style={styles.documentCardsContainer}>
        <DocumentCard
          key={polishId.id}
          document={polishId}
          pickImage={pickImage}
          goToCamera={goToCamera}
        />
      </View>
      {/* <Text>Hello, {session?.session?.user.email}</Text> */}
      {/* <Button title="Log out" onPress={handleLogout} /> */}
    </View>
  );
};

export default HomeScreen;
