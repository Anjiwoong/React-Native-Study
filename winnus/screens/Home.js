import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import ImagePicker from '../components/ImagePicker';
import SignatureCanvas from '../components/SignatureCanvas';

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.push('test');
  };

  return (
    <View style={styles.container}>
      <Button
        title="go test screen"
        android_ripple={{ color: '#ccc' }}
        onPress={pressHandler}
      />
      <Text>HomeScreen</Text>
      <ImagePicker />
      <SignatureCanvas />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    fontSize: 20,
  },
});

export default Home;
