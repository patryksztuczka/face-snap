import { TStatus } from './TStatus';

export interface IImageSliceState {
  processedImageBase64: string | null;
  processImageStatus: TStatus;
  getHelloWorldStatus: TStatus;
}

export interface IProcessImageThunk {
  imageBase64: string;
  callback?: () => void;
}

export interface IProcessImageThunkResponse {
  status: number;
  imageBase64: string;
}

export interface ISavePictureThunk {
  userId: string;
  imageBase64: string;
  callback?: () => void;
}
