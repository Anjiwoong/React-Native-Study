import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Signature from 'react-native-signature-canvas';

const SignatureCanvas = () => {
  const [signature, setSign] = useState(null);

  const handleOK = signature => {
    console.log(signature);
    setSign(signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const style = `
    .m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
        autoClear={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  preview: {
    backgroundColor: '#c6c3c3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  image: {
    width: 335,
    height: 200,
  },
});

export default SignatureCanvas;
