import { Button, StyleSheet, Text, View } from 'react-native';
import ImagePicker from '../components/ImagePicker';

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

export default Home;
