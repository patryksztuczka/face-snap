import { TStatus } from './TStatus';

export interface ISavedImage {
  id: string;
  userId: string;
  image: Blob;
  createdAt: string;
}

export interface IImageSliceState {
  processedImageBase64: string | null;
  savedImages: ISavedImage[] | null;
  processImageStatus: TStatus;
  listSavedImagesStatus: TStatus;
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

export interface IListSavedImagesThunk {
  userId: string;
}

export interface IListSavedImagesPayload {
  savedImages: ISavedImage[];
}
