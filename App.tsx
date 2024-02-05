import {StyleSheet, View} from 'react-native';
import TimePicker from './TimePicker/TimePicker';

export default function App() {
  return (
    <View style={styles.container}>
      <TimePicker
        initialHours={12}
        initialMinutes={53}
        containerStyles={{backgroundColor: '#aaa'}}
        timeCardStyles={{backgroundColor: '#fff'}}
        timeTitleStyles={{fontWeight: '100'}}
        timeDotColor="#FFF"
        dialStyles={{backgroundColor: '#fff'}}
        dialHourTitleStyles={{color: '#000', fontWeight: '100'}}
        dialHourTitleActiveStyles={{color: '#fff', fontWeight: '300'}}
        activecolors={['#ff5555']}
        minuteDotColor="#aaa"
        onSetHours={(value: number) => console.log(value)}
        onSetMinutes={(value: number) => console.log(value)}
      />
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
