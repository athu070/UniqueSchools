import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character.'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // Proceed with login logic
      navigation.navigate('Home')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Add your logo component here */}
        <Image
          source = {require('../src/assests/logo_unique.jpg')}
          style={styles.logo}
          resizeMode='contain'
          />
      </View>
      <Text style={styles.title}>Welcome to the Unique Schools Alumni App</Text>
      <TextInput
        style={[styles.input, emailError ? styles.inputError : null]}
        placeholder="Email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={[styles.input, passwordError ? styles.inputError : null]}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot password</Text>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.registerButton]}>
          <Text style={[styles.buttonText, styles.registerButtonText]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (existing styles)
  container: {
    flex: 1,
    backgroundColor: '#FFA500', // Orange color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    // Add styles for your logo component
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20, // Added border radius for rounded corners
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    flexDirection: 'row', // Added to display buttons horizontally
  },
  button: {
    backgroundColor: 'navy',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Added border radius for rounded buttons
    marginHorizontal: 5, // Added horizontal margin for spacing
    flex: 1, // Added to make buttons equal length
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Added to center text in buttons
  },
  registerButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'navy',
  },
  registerButtonText: {
    color: 'black', // Added to change the register button text color to black
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  inputError: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default LoginScreen;