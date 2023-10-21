import { createSlice } from '@reduxjs/toolkit';

import { reduxStatus } from '../../constants';
import { IImageSliceState } from '../../types/Image';
import { processImageThunk } from '../thunks/imageThunk';

const initialState: IImageSliceState = {
  processedImageBase64: null,
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
    builder.addCase(processImageThunk.fulfilled, (state, { payload }) => {
      state.processImageStatus = reduxStatus.fulfilled;
      if (!payload) return;
      state.processedImageBase64 = payload;
    });
    builder.addCase(processImageThunk.rejected, (state) => {
      state.processImageStatus = reduxStatus.rejected;
    });
  },
});

export default imageSlice.reducer;
