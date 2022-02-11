import React from 'react';
import { View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import RecommendationCard, {
  IProfileInformation,
} from 'src/components/RecommendationCard';
import Colors from 'src/styles/Colors';

import styles from './styles';

const MOCK_IMAGE_URLS = [
  'https://images-ssl.gotinder.com/5cb97108fb3e6715000bc5d3/640x800_419b3640-27fb-4426-9c71-f72422001e31.jpg',
  'https://images-ssl.gotinder.com/5cb97108fb3e6715000bc5d3/640x800_afbf6ad4-d387-424a-947c-b0f160158e89.jpg',
  'https://images-ssl.gotinder.com/5cb97108fb3e6715000bc5d3/640x800_12611dc4-28a1-4ae1-8185-26a61981ce3f.jpg',
  'https://images-ssl.gotinder.com/5cb97108fb3e6715000bc5d3/640x800_8150d580-158a-4ce0-a7e6-cbf56115fe4a.jpg',
];

const MOCK_PROFILE: IProfileInformation = {
  age: 21,
  name: 'Helil Bergária',
  photosAndVideos: MOCK_IMAGE_URLS,
};

const RecommendationsScreen = (): JSX.Element => {
  return (
    <LinearGradient
      colors={[Colors.white, Colors.whisper]}
      style={styles.gradientContainer}
    >
      <View>
        <RecommendationCard profile={MOCK_PROFILE} />
      </View>
    </LinearGradient>
  );
};

export default RecommendationsScreen;
