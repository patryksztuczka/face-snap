import { isEmpty } from 'lodash';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { styles } from './HistoryScreen.styles';
import { useAuth } from '../../../src/context/AuthContext/AuthContext';
import { useAppDispatch, useAppSelector } from '../../../src/hooks/useRedux';
import { listSavedImagesThunk } from '../../../src/redux/thunks/imageThunk';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import PrimaryParagraph from '../../components/PrimaryParagraph/PrimaryParagraph';

const HistroyScreen = () => {
  const dispatch = useAppDispatch();

  const auth = useAuth();

  const savedImages = useAppSelector((state) => state.image.savedImages);

  const listSavedImagesStatus = useAppSelector((state) => state.image.listSavedImagesStatus);

  useEffect(() => {
    if (auth?.session?.user.id) {
      dispatch(listSavedImagesThunk({ userId: auth.session.user.id }));
    }
  }, []);

  return (
    <View>
      <View style={styles.headerSection}>
        <PrimaryHeader text="Historia" />
        <PrimaryParagraph text="Przeglądaj swoje zapisane fotografie." />
      </View>
      <View>
        {!isEmpty(savedImages) && savedImages != null ? (
          savedImages?.map((savedImage) => (
            <HistoryItem key={savedImage.id} savedImage={savedImage} />
          ))
        ) : (
          <Text>Brak zapisanych zdjęć</Text>
        )}
      </View>
    </View>
  );
};

export default HistroyScreen;
