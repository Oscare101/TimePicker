import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import styles from '../constants/styles';
import colors from '../constants/colors';

const width = Dimensions.get('screen').width;

export default function DialBlock(props: any) {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const touchSize = width * 0.09;
  return (
    <View style={styles.dialBlock}>
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
              style={{
                position: 'absolute',
                top: 0,
                left: -touchSize / 2,
                width: touchSize,
                height: touchSize,
                transform: [{rotate: `-${(360 / 12) * index}deg`}],
                borderRadius: touchSize,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: touchSize / 2, color: colors.text}}>
                {d}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: touchSize * 1,
                left: -touchSize / 2,
                width: touchSize,
                height: touchSize,
                transform: [{rotate: `-${(360 / 12) * index}deg`}],
                borderRadius: touchSize,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: touchSize / 2, color: colors.text}}>
                {d + 12}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
