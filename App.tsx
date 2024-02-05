import {StyleSheet, View} from 'react-native';
import TimePicker from './TimePicker/TimePicker';

export default function App() {
  return (
    <View style={styles.container}>
      <TimePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
