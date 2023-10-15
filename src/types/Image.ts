import { TStatus } from './TStatus';

export interface IImageSliceState {
  processImageStatus: TStatus;
  getHelloWorldStatus: TStatus;
}

export interface IProcessImageThunk {
  imageBase64: string;
}
