import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../constants/styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';
import GradientText from './GradientText';

export default function TimeHeader(props: any) {
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
        style={styles.hourMinuteBlock}>
        {props.active === 'hour' ? (
          <GradientText
            onPress={() => {}}
            colors={[colors.color1, colors.color2]}
            style={styles.hourMinuteTitle}>
            {props.hours}
          </GradientText>
        ) : (
          <Text style={styles.hourMinuteTitle}>{props.hours}</Text>
        )}
      </TouchableOpacity>
      <View style={styles.dotBlock}>
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.setActive('minute')}
        style={styles.hourMinuteBlock}>
        {props.active === 'minute' ? (
          <GradientText
            onPress={() => {}}
            colors={[colors.color1, colors.color2]}
            style={styles.hourMinuteTitle}>
            {props.minutes}
          </GradientText>
        ) : (
          <Text style={styles.hourMinuteTitle}>{props.minutes}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
