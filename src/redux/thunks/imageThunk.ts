import { createAsyncThunk } from '@reduxjs/toolkit';

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
