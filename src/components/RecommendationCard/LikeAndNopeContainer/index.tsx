import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

interface IProps {
  offsetX: SharedValue<number>;
  offsetY: SharedValue<number>;
  resolvedValue: 'like' | 'nope' | 'superlike' | undefined;
}

const LikeAndNopeContainer = ({
  offsetX,
  offsetY,
  resolvedValue,
}: IProps): JSX.Element => {
  const likeWrapperAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(offsetX.value, [0, SCREEN_WIDTH / 2], [0, 1]),
  }));

  const nopeWrapperAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(offsetX.value, [-SCREEN_WIDTH / 2, 0], [1, 0]),
  }));

  const superLikeWrapperAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(offsetY.value, [-SCREEN_HEIGHT / 5, 0], [1, 0]),
  }));

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Animated.View
          style={[
            styles.likeWrapper,
            resolvedValue === undefined && likeWrapperAnimatedStyle,
            resolvedValue === 'like' && styles.fullOpacity,
          ]}
        >
          <Text style={[styles.text, styles.likeText]}>{'LIKE'}</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.nopeWrapper,
            resolvedValue === undefined && nopeWrapperAnimatedStyle,
            resolvedValue === 'nope' && styles.fullOpacity,
          ]}
        >
          <Text style={[styles.text, styles.nopeText]}>{'NOPE'}</Text>
        </Animated.View>
      </View>

      <Animated.View
        style={[
          styles.superLikeWrapper,
          resolvedValue === undefined && superLikeWrapperAnimatedStyle,
          resolvedValue === 'superlike' && styles.fullOpacity,
        ]}
      >
        <Text style={[styles.text, styles.superLikeText]}>{'SUPERLIKE'}</Text>
      </Animated.View>
    </View>
  );
};

export default LikeAndNopeContainer;
