import {View, TextInput, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

const CustomTextInput = ({
  placeholder,
  errorText,
  onChangeText,
  value,
  showEyes = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={!showPassword}
      />
      <View style={styles.password}>
        {showEyes ? (
          <>
            {showPassword ? (
              <Icon
                name="eye-off"
                size={20}
                onPress={() => setShowPassword(false)}
              />
            ) : (
              <Icon
                name="eye"
                size={20}
                onPress={() => setShowPassword(true)}
              />
            )}
          </>
        ) : null}
      </View>
      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#e2e2e2',
  },
  errorText: {
    color: 'red',
  },
  password: {
    position: 'absolute',
    right: 0,
    padding: 5,
  },
});
