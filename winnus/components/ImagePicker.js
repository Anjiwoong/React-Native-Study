import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  PermissionStatus,
  useCameraPermissions,
  useMediaLibraryPermissions,
} from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState(null);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [status, requestStatus] = useMediaLibraryPermissions();

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

  const libraryPermissions = async () => {
    if (!status?.granted) {
      const permission = await requestStatus();
      if (!permission.granted) {
        return false;
      }
    }

    return true;
  };

  const takeImageHandler = async () => {
    const androidPermission = await libraryPermissions();
    const hasPermission = await verifyPermissions();

    if (!hasPermission || !androidPermission) return;

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!result.canceled) {
      // 이미지가 선택된 경우 처리할 작업
      setPickedImage(result.assets[0].uri);
    }
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage)
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
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
    backgroundColor: 'lightgray',
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
