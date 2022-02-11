import React from 'react';
import { Image, View } from 'react-native';

import styles from './styles';

interface IProps {}

const MOCK_URL =
  'https://instagram.frao1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/258884581_279855040758169_3957954401252199720_n.jpg?_nc_ht=instagram.frao1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=BnnyIfI6-r0AX-TRjFD&edm=ALlQn9MBAAAA&ccb=7-4&oh=00_AT8UTYE0WJmWAgXS08mpbxl9CjbjSjKsOzS1kzkHxD9D8A&oe=61D56895&_nc_sid=48a2a6';

const ProfilePicture = ({}: IProps): JSX.Element => {
  return (
    <View>
      <Image
        accessibilityIgnoresInvertColors={false}
        source={{ uri: MOCK_URL }}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePicture;
