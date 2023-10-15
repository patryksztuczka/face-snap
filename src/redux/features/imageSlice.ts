import { createSlice } from '@reduxjs/toolkit';

import { reduxStatus } from '../../constants';
import { IImageSliceState } from '../../types/Image';
import { processImageThunk } from '../thunks/imageThunk';

const initialState: IImageSliceState = {
  processImageStatus: null,
  getHelloWorldStatus: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(processImageThunk.pending, (state) => {
      state.processImageStatus = reduxStatus.pending;
    });
    builder.addCase('image/proccessImage/fulfilled', (state) => {
      state.processImageStatus = reduxStatus.fulfilled;
    });
    builder.addCase('image/proccessImage/rejected', (state) => {
      state.processImageStatus = reduxStatus.rejected;
    });
  },
});

export default imageSlice.reducer;
