import React from 'react';
import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'src/components/Icon';
import ProfilePicture from 'src/components/ProfilePicture';
import Colors from 'src/styles/Colors';

import styles, { Constants as StylesConstants } from './styles';

const Header = (): JSX.Element => {
  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.container}>
      <ProfilePicture />

      <Icon
        color={Colors.ghost}
        name={'Notification'}
        size={StylesConstants.notificationIconSize}
      />
    </SafeAreaView>
  );
};

export default Header;
