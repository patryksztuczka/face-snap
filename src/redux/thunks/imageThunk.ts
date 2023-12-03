import { createAsyncThunk } from '@reduxjs/toolkit';
import { decode } from 'base64-arraybuffer';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { supabase } from '../../supabaseClient';
import {
  IListSavedImagesPayload,
  IListSavedImagesThunk,
  IProcessImageThunk,
  IProcessImageThunkResponse,
  ISavePictureThunk,
  ISavedImage,
} from '../../types/Image';
import { Database } from '../../types/supabase';

export const getHelloWorldThunk = createAsyncThunk('image/getHelloWorldThunk', async () => {
  try {
    const response = await fetch(`http://192.168.8.102:5000/api/hello`);
    const data = await response.json();
    console.log('DATA FROM SERVER', data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const processImageThunk = createAsyncThunk(
  'image/processImage',
  async ({ imageBase64, callback }: IProcessImageThunk) => {
    try {
      const response = await fetch(`http://192.168.8.102:5000/api/process-image`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageBase64 }),
      });

      const data = (await response.json()) as IProcessImageThunkResponse;

      if (callback) callback();

      return data.imageBase64;
    } catch (error) {
      console.log(error);
    }
  },
);

export const savePictureThunk = createAsyncThunk(
  'image/savePicture',
  async ({ userId, imageBase64, documentId, callback }: ISavePictureThunk) => {
    try {
      console.log('callback', callback);
      const fileName = `${uuidv4()}.jpg`;

      const { data, error } = await supabase
        .from('images')
        .insert({
          image_name: fileName,
          user_id: userId,
          document_id: documentId,
        })
        .select();

      if (error) throw new Error(error.message);

      const { data: storageData, error: storageError } = await supabase.storage
        .from('images')
        .upload(fileName, decode(imageBase64), {
          contentType: 'image/jpeg',
        });

      if (storageError) throw new Error(storageError.message);

      if (callback) callback();

      return data;
    } catch (error) {
      console.log('ERROR');
      console.log(error);
    }
  },
);

export const listSavedImagesThunk = createAsyncThunk(
  'image/listSavedImages',
  async ({ userId }: IListSavedImagesThunk) => {
    try {
      const { data, error } = await supabase.from('images').select('*').eq('user_id', userId);

      if (error) throw new Error(error.message);

      const pictures = data as Database['public']['Tables']['images']['Row'][];

      const images = await Promise.all(
        pictures.map(async (picture) => {
          const { data: storageData } = await supabase.storage
            .from('images')
            .getPublicUrl(picture.image_name);

          return {
            id: picture.id,
            userId: picture.user_id,
            imageName: picture.image_name,
            imageUrl: storageData.publicUrl,
            documentId: picture.document_id,
            createdAt: picture.created_at,
          } as ISavedImage;
        }),
      );

      return { savedImages: images } as IListSavedImagesPayload;
    } catch (error) {
      console.log(error);
    }
  },
);
