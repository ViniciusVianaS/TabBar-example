import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function Home () {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
