import { CameraCapturedPicture } from 'expo-camera';

import { IDocument } from '../DocumentCard/DocumentCard.types';

export interface IPhotoPreviewProps {
  isProcessing: boolean;
  capturedPicture: CameraCapturedPicture;
  selectedDocument: IDocument;
  takePictureAgain: () => void;
}
