import { StyleSheet } from 'react-native';

const Constants = {
  imageSize: 32,
};

const styles = StyleSheet.create({
  image: {
    borderRadius: Constants.imageSize / 2,
    height: Constants.imageSize,
    width: Constants.imageSize,
  },
});

export default styles;
