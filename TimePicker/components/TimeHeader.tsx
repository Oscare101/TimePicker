import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../constants/styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';
import GradientText from './GradientText';

export default function TimeHeader(props: any) {
  const gradientColors = props.activecolors
    ? props.activecolors.length > 1
      ? props.activecolors
      : [...props.activecolors, ...props.activecolors]
    : [colors.color1, colors.color2];

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.setActive('hour')}
        style={[styles.hourMinuteBlock, {...props.timeCardStyles}]}>
        {props.active === 'hour' ? (
          <GradientText
            onPress={() => {}}
            colors={gradientColors}
            style={[styles.hourMinuteTitle, {...props.timeTitleStyles}]}>
            {props.hours}
          </GradientText>
        ) : (
          <Text style={[styles.hourMinuteTitle, {...props.timeTitleStyles}]}>
            {props.hours}
          </Text>
        )}
      </TouchableOpacity>
      <View style={styles.dotBlock}>
        <View
          style={[
            styles.dot,
            {backgroundColor: props.timeDotColor || colors.text},
          ]}
        />
        <View
          style={[
            styles.dot,
            {backgroundColor: props.timeDotColor || colors.text},
          ]}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.setActive('minute')}
        style={[styles.hourMinuteBlock, {...props.timeCardStyles}]}>
        {props.active === 'minute' ? (
          <GradientText
            onPress={() => {}}
            colors={gradientColors}
            style={[styles.hourMinuteTitle, {...props.timeTitleStyles}]}>
            {props.minutes}
          </GradientText>
        ) : (
          <Text style={[styles.hourMinuteTitle, {...props.timeTitleStyles}]}>
            {props.minutes}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
