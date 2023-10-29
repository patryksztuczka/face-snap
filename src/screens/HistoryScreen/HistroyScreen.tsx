import { isEmpty } from 'lodash';
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { styles } from './HistoryScreen.styles';
import { useAuth } from '../../../src/context/AuthContext/AuthContext';
import { useAppDispatch, useAppSelector } from '../../../src/hooks/useRedux';
import { listSavedImagesThunk } from '../../../src/redux/thunks/imageThunk';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import PrimaryParagraph from '../../components/PrimaryParagraph/PrimaryParagraph';
import { reduxStatus } from '../../constants';

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
    <View style={styles.historyScreenWrapper}>
      <View style={styles.headerSection}>
        <PrimaryHeader text="Historia" />
        <PrimaryParagraph text="Przeglądaj swoje zapisane fotografie." />
      </View>
      {listSavedImagesStatus === reduxStatus.pending ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#aaa" />
          <PrimaryParagraph text="Ładowanie" />
        </View>
      ) : null}
      <View style={styles.historyList}>
        {!isEmpty(savedImages) &&
        savedImages != null &&
        listSavedImagesStatus !== reduxStatus.pending
          ? savedImages?.map((savedImage) => (
              <HistoryItem key={savedImage.id} savedImage={savedImage} />
            ))
          : null}
      </View>
      {isEmpty(savedImages) && listSavedImagesStatus !== reduxStatus.pending ? (
        <View style={styles.emptyStateContainer}>
          <PrimaryParagraph text="Nie masz jeszcze zapisanych zdjęć." />
        </View>
      ) : null}
    </View>
  );
};

export default HistroyScreen;
