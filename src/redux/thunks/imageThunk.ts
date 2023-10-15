import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProcessImageThunk } from '../../types/Image';

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
  async ({ imageBase64 }: IProcessImageThunk) => {
    try {
      const response = await fetch(`http://192.168.8.102:5000/api/process-image`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageBase64 }),
      });
      const data = await response.json();
      console.log('DATA FROM SERVER', data);
    } catch (error) {
      console.log(error);
    }
  },
);
