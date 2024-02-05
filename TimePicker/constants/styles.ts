import {Dimensions, StyleSheet} from 'react-native';
import colors from './colors';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    width: width * 0.9,
    color: colors.BG,
    padding: '5%',
  },
});
