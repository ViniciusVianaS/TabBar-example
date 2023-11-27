import { View, Text, StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons';

export default function NewButton({focused ,size}) {
  return (
    <View style={[styles.container, { backgroundColor: focused ?'#3eccf5' : '#6fdfff' }]}>
      <Entypo name='plus' size={size} color={focused ? '#fff' : '#ddd'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
})

