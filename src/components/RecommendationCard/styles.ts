import { StyleSheet } from 'react-native';

import Colors from 'src/styles/Colors';
import { Fonts } from 'src/styles/Fonts';

const styles = StyleSheet.create({
  age: {
    color: Colors.white,
    fontFamily: Fonts.ProximaNovaLight,
    fontSize: 24,
    marginLeft: 8,
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    elevation: 8,
    height: 620,
    margin: 8,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  informationContainer: {
    height: 180,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  informationWrapper: {
    marginBottom: 80,
  },
  name: {
    color: Colors.white,
    fontFamily: Fonts.ProximaNovaBold,
    fontSize: 32,
  },
});

export default styles;
