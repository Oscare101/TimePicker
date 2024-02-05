import {View} from 'react-native';
import styles from './constants/styles';
import TimeHeader from './components/TimeHeader';
import {useState} from 'react';

export default function TimePicker(props: any) {
  const [hours, setHours] = useState<number>(new Date().getHours());
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());
  const [active, setActive] = useState<string>('hour');

  return (
    <View style={styles.container}>
      <TimeHeader
        hours={hours}
        minutes={minutes}
        setActive={(value: string) => setActive(value)}
        active={active}
      />
    </View>
  );
}
