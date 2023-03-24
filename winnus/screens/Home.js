import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import ImagePicker from '../components/ImagePicker';
import SignatureCanvas from '../components/SignatureCanvas';

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.push('detail');
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Button
          title="go detail screen"
          android_ripple={{ color: '#ccc' }}
          onPress={pressHandler}
        />
        <Text>HomeScreen</Text>
        <ImagePicker />
        <SignatureCanvas />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    marginTop: 20,
    fontSize: 20,
  },
});

export default Home;
