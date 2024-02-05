import {
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../constants/styles';
import colors from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('screen').width;

export default function DialBlock(props: any) {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const touchSize = width * 0.1;
  const fontSize = touchSize / 2;

  const minuteTouchSize = width * 0.03;
  const arrowLength = width * 0.3;
  const arrowWidth = width * 0.01;

  const gradientColors = props.activecolors
    ? props.activecolors.length > 1
      ? props.activecolors
      : [...props.activecolors, ...props.activecolors]
    : [colors.color1, colors.color2];

  const hourDial = (
    <>
      {data.map((d: any, index: number) => (
        <View
          key={index}
          style={{
            transform: [{rotate: `${(360 / 12) * index}deg`}],
            width: 0,
            height: 0,
            position: 'absolute',
          }}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              height: width * 0.38,
              width: 1,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.setHours(d)}
              style={{
                position: 'absolute',
                top: 0,
                left: -fontSize,
                width: touchSize,
                height: touchSize,
                transform: [{rotate: `-${(360 / 12) * index}deg`}],
                borderRadius: touchSize,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
              {props.hours === d ? (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={gradientColors}
                  style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      {fontSize: fontSize, color: colors.white},
                      {...props.dialHourTitleActiveStyles},
                    ]}>
                    {d}
                  </Text>
                </LinearGradient>
              ) : (
                <Text
                  style={[
                    {fontSize: fontSize, color: colors.white},
                    {...props.dialHourTitleStyles},
                  ]}>
                  {d}
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.setHours(d + 12)}
              style={{
                position: 'absolute',
                top: touchSize * 1.2,
                left: -fontSize,
                width: touchSize,
                height: touchSize,
                transform: [{rotate: `-${(360 / 12) * index}deg`}],
                borderRadius: touchSize,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
              {props.hours === d + 12 ? (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={gradientColors}
                  style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      {fontSize: fontSize, color: colors.white},
                      {...props.dialHourTitleActiveStyles},
                    ]}>
                    {d + 12}
                  </Text>
                </LinearGradient>
              ) : (
                <Text
                  style={[
                    {fontSize: fontSize, color: colors.white},
                    {...props.dialHourTitleStyles},
                  ]}>
                  {d + 12}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );

  const minuteDial = (
    <>
      {[...Array(60)].map((_: any, index: number) => (
        <View
          key={index}
          style={{
            transform: [{rotate: `${(360 / 60) * index}deg`}],
            width: 0,
            height: 0,
            position: 'absolute',
            backgroundColor: 'red',
          }}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              height: width * 0.38,
              width: 1,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.setMinutes(index)}
              style={{
                position: 'absolute',
                top: 0,
                left: -minuteTouchSize / 2,
                width: minuteTouchSize,
                height: touchSize * 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: index % 5 === 0 ? width * 0.02 : width * 0.01,
                  width: width * 0.01,
                  borderRadius: width * 0.01,
                  backgroundColor: props.minuteDotColor || colors.text,
                  position: 'absolute',
                  top: touchSize / 3,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View
        style={{
          transform: [{rotate: `${(360 / 60) * props.minutes}deg`}],
          width: 0,
          height: 0,
          position: 'absolute',
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={gradientColors}
          style={{
            position: 'absolute',
            bottom: 0,
            left: -arrowWidth / 2,

            borderRadius: arrowWidth,

            width: arrowWidth,
            height: arrowLength,
          }}></LinearGradient>
      </View>
    </>
  );

  return (
    <View style={[styles.dialBlock, {...props.dialStyles}]}>
      {props.active === 'hour' ? hourDial : minuteDial}
    </View>
  );
}
