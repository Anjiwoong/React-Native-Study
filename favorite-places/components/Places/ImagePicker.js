import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { GlobalColors } from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

const ImagePicker = ({ onTakeImage }) => {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!image.canceled) {
      setPickedImage(image.assets[0].uri);
      onTakeImage(image.assets[0].uri);
    }
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage)
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalColors.primary100,
    borderRadius: 4,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});

export default ImagePicker;
