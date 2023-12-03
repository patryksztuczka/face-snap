import { Point } from 'expo-camera';

import { IFaceFeature } from '../types/IFaceFeature';

export const countGazeProbability = (face: IFaceFeature, threshold: number = 10) => {
  const leftEye = face.LEFT_EYE;
  const rightEye = face.RIGHT_EYE;
  const nose = face.NOSE_BASE;
  const mouth = face.BOTTOM_MOUTH;
  const leftEar = face.LEFT_EAR;
  const rightEar = face.RIGHT_EAR;

  if (!leftEye || !rightEye || !nose || !mouth || !leftEar || !rightEar) {
    return false;
  }

  const distance = (a: Point, b: Point) => {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  };

  const eyesMidddlePoint: Point = {
    x: (leftEye.x + rightEye.x) / 2,
    y: (leftEye.y + rightEye.y) / 2,
  };

  const noseEyesDistance = distance(eyesMidddlePoint, nose);
  const earEyeLevelDistance = Math.abs((leftEar.y + rightEar.y) / 2 - (leftEye.y + rightEye.y) / 2);
  const eyesLevelDistance = Math.abs(leftEye.y - rightEye.y);

  let score = 0;
  score += Math.min(1, noseEyesDistance / threshold);
  score += Math.min(1, earEyeLevelDistance / threshold);
  score += Math.min(1, eyesLevelDistance / threshold);

  const probability = Math.max(0, 1 - score / 3);

  return probability;
};
