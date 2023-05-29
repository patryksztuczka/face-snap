import { View } from 'react-native';

import { iconBoxStyles } from './IconBox.styles';
import { IIconBoxProps } from './IconBox.types';

const IconBox = ({ children }: IIconBoxProps) => {
  return <View style={iconBoxStyles.iconBoxWrapper}>{children}</View>;
};

export default IconBox;
