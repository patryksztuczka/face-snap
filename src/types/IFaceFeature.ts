import { Point } from 'expo-camera';
import { FaceFeature } from 'expo-face-detector';

export interface IFaceFeature extends FaceFeature {
  LEFT_EYE: Point | undefined;
  RIGHT_EYE: Point | undefined;
  NOSE_BASE: Point | undefined;
  BOTTOM_MOUTH: Point | undefined;
  LEFT_EAR: Point | undefined;
  RIGHT_EAR: Point | undefined;
}
