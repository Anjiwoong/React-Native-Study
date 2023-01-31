import { Pressable, StyleSheet, Text } from 'react-native';
import { GlobalColors } from '../../constants/colors';

const Button = ({ onPress, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: GlobalColors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4,
  },

  pressed: {
    opacity: 0.7,
  },

  text: {
    textAlign: 'center',
    fontSize: 16,
    color: GlobalColors.primary50,
  },
});

export default Button;
