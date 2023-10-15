import { createSlice } from '@reduxjs/toolkit';

import { IImageSliceState } from '../../types/Image';

const initialState: IImageSliceState = {
  getHelloWorldStatus: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
});

export default imageSlice.reducer;
