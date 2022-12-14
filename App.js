import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});