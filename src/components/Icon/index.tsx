import React from 'react';
import { View } from 'react-native';

import { Color } from 'react-native-svg';

import Icons from './Icons';

export type IconsNames = keyof typeof Icons;

interface IProps {
  color?: Color;
  name: IconsNames;
  size?: number;
}

const Icon = ({ name, size = 24, color = '#000' }: IProps): JSX.Element => {
  const IconSelected = Icons[name];

  return (
    <View>
      <IconSelected color={color} height={size} width={size} />
    </View>
  );
};

export default Icon;
