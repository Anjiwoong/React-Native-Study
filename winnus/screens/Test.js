import { StyleSheet, Text, View } from 'react-native';
import BarcodeScannerEx from '../components/BarcodeScannerEx';

const Test = () => {
  return (
    <View style={styles.container}>
      <Text>TestScreen</Text>
      <BarcodeScannerEx />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    fontSize: 20,
  },
});

export default Test;
