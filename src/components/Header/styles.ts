import { StyleSheet } from 'react-native';

import Colors from 'src/styles/Colors';

export const Constants = {
  notificationIconSize: 24,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 4,
  },
});

export default styles;
