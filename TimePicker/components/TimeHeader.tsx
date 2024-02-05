import {Text, TouchableOpacity, View} from 'react-native';

export default function TimeHeader(props: any) {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity>
        <Text>{props.hours}</Text>
      </TouchableOpacity>
    </View>
  );
}
