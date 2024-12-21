import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

const LoginScreen = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');

  const validateRegistrationNumber = (regNo) => {
    // Updated regex to allow multiple prefixes and 3-4 digits
    const regExp = /^NCCS(?:BIM|BCA|CSIT)\d{3,4}$/;
    return regExp.test(regNo);
  };

  const validatePassword = (pwd) => {
    // Minimum 6 characters
    return pwd.length >= 6;
  };

  const handleLogin = () => {
    if (!validateRegistrationNumber(registrationNumber)) {
      Alert.alert(
        'Invalid Registration Number',
        'Please enter a valid registration number (e.g., NCCSBIM0232, NCCSBCA061, NCCSCSIT1001).'
      );
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Invalid Password', 'Password must be at least 6 characters long.');
      return;
    }
    Alert.alert('Login Successful', `Welcome Registration No: ${registrationNumber}`);
    // Add further login logic here (e.g., authentication API)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Registration Number"
        keyboardType="default"
        value={registrationNumber}
        onChangeText={setRegistrationNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
