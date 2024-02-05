import {Dimensions, StyleSheet} from 'react-native';
import colors from './colors';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: colors.BG,
    padding: '5%',
    borderRadius: width * 0.06,
  },

  hourMinuteBlock: {
    width: '40%',
    backgroundColor: colors.card,
    aspectRatio: 1.5,
    borderRadius: width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  hourMinuteTitle: {
    fontSize: width * 0.15,
    color: colors.text,
  },
  dotBlock: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: width * 0.07,
  },
  dot: {
    width: width * 0.02,
    aspectRatio: 1,
    backgroundColor: colors.text,
    borderRadius: 100,
  },

  dialBlock: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: colors.card,
    borderRadius: width,
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
