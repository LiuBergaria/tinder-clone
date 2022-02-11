import { StyleSheet } from 'react-native';

import Colors from 'src/styles/Colors';
import { Fonts } from 'src/styles/Fonts';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
  fullOpacity: {
    opacity: 1,
  },

  likeText: {
    borderColor: Colors.mountainMeadow,
    color: Colors.mountainMeadow,
    marginRight: 16,
    transform: [{ rotate: '-15deg' }],
  },
  likeWrapper: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    opacity: 0,
    padding: 32,
  },
  nopeText: {
    borderColor: Colors.radicalRed,
    color: Colors.radicalRed,
    marginLeft: 16,
    transform: [{ rotate: '15deg' }],
  },
  nopeWrapper: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    opacity: 0,
    padding: 32,
  },
  superLikeText: {
    borderColor: Colors.dodgerBlue,
    color: Colors.dodgerBlue,
    transform: [{ rotate: '-15deg' }],
  },
  superLikeWrapper: {
    alignItems: 'center',
    marginBottom: 120,
    opacity: 0,
  },
  text: {
    borderRadius: 4,
    borderWidth: 4,
    fontFamily: Fonts.ProximaNovaSemibold,
    fontSize: 28,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  wrapper: {
    flexDirection: 'row',
  },
});

export default styles;
