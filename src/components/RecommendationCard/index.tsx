import React, { useState } from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';

import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Colors from 'src/styles/Colors';

import LikeAndNopeContainer from './LikeAndNopeContainer';
import styles from './styles';

export interface IProfileInformation {
  age: number;
  description: string;
  distance: string[];
  isRecentlyActive: boolean;
  name: string;
  photosAndVideos: string[];
}

interface IProps {
  profile: IProfileInformation;
}

const Constants = {
  animationDuration: 300,
};

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const defaultOffset = { x: 0, y: 0 };
const likeOffset = { x: SCREEN_WIDTH * 1.5, y: 0 };
const nopeOffset = { x: -SCREEN_WIDTH * 1.5, y: 0 };
const superLikeOffset = { x: 0, y: -SCREEN_HEIGHT };

const RecommendationCard = ({ profile }: IProps): JSX.Element => {
  const [resolvedValue, setResolvedValue] = useState<
    'like' | 'nope' | 'superlike' | undefined
  >(undefined);

  const offsetX = useSharedValue(defaultOffset.x);
  const offsetY = useSharedValue(defaultOffset.y);

  const handleOnEnded = (): void => {
    let offset = defaultOffset;

    if (offsetY.value < -SCREEN_HEIGHT / 5) {
      offset = superLikeOffset;

      setResolvedValue('superlike');
    } else if (offsetX.value > SCREEN_WIDTH / 4) {
      offset = likeOffset;

      setResolvedValue('like');
    } else if (offsetX.value < -SCREEN_WIDTH / 4) {
      offset = nopeOffset;

      setResolvedValue('nope');
    } else {
      setResolvedValue(undefined); // remove
    }

    offsetX.value = withTiming(offset.x, {
      duration: Constants.animationDuration,
    });
    offsetY.value = withTiming(offset.y, {
      duration: Constants.animationDuration,
    });
  };

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      {
        rotate:
          interpolate(
            offsetX.value,
            [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
            [15, 0, -15],
          ) + 'deg',
      },
    ],
  }));

  return (
    <PanGestureHandler
      onEnded={handleOnEnded}
      onGestureEvent={({ nativeEvent: { translationX, translationY } }) => {
        offsetX.value = translationX;
        offsetY.value = translationY;
      }}
    >
      <Animated.View style={[styles.container, animatedContainerStyle]}>
        <ImageBackground
          source={{ uri: profile.photosAndVideos[0] }}
          style={styles.imageContainer}
        >
          <LikeAndNopeContainer
            offsetX={offsetX}
            offsetY={offsetY}
            resolvedValue={resolvedValue}
          />

          <LinearGradient
            colors={['transparent', Colors.black]}
            style={styles.informationContainer}
          >
            <View style={styles.informationWrapper}>
              <Text style={styles.name}>
                {profile.name} <Text style={styles.age}>{profile.age}</Text>
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default RecommendationCard;
