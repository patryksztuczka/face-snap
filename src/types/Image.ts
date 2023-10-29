import { TStatus } from './TStatus';
import { IDocument } from '../components/DocumentCard/DocumentCard.types';

export interface ISavedImage {
  id: string;
  userId: string;
  imageName: string;
  imageUrl: string;
  requiredWidth: number;
  requiredHeight: number;
  createdAt: string;
}

export interface IImageSliceState {
  selectedDocument: IDocument | null;
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
  requiredWidth: number;
  requiredHeight: number;
  callback?: () => void;
}

export interface IListSavedImagesThunk {
  userId: string;
}

export interface IListSavedImagesPayload {
  savedImages: ISavedImage[];
}
