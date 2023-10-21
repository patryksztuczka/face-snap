import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '../../supabaseClient';
import {
  IProcessImageThunk,
  IProcessImageThunkResponse,
  ISavePictureThunk,
} from '../../types/Image';

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
  async ({ userId, imageBase64, callback }: ISavePictureThunk) => {
    try {
      const { data, error } = await supabase
        .from('pictures')
        .insert({
          base64_image: imageBase64,
          user_id: userId,
        })
        .select();

      if (error) throw new Error(error.message);

      if (callback) callback();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
