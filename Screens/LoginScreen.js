import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailTimeout, setEmailTimeout] = useState(null);
  const [passwordTimeout, setPasswordTimeout] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    clearTimeout(emailTimeout);
    const newTimeout = setTimeout(() => {
      if (!validateEmail(text)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }, 500); // Adjust the delay (in milliseconds) as needed
    setEmailTimeout(newTimeout);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    clearTimeout(passwordTimeout);
    const newTimeout = setTimeout(() => {
      if (!validatePassword(text)) {
        setPasswordError(
          'Password must be at least 8 characters long'
        );
      } else {
        setPasswordError('');
      }
    }, 500); // Adjust the delay (in milliseconds) as needed
    setPasswordTimeout(newTimeout);
  };

  const handleLogin = () => {
    if (validateEmail(email) && validatePassword(password)) {
      // Proceed with login logic
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      {/* ... (existing JSX code) */}
      <View style={styles.logoContainer}>
        {/* Add your logo component here */}
        <Image
          source = {require('../src/assests/logo_pastpupil.png')}
          style={styles.logo}
          resizeMode='contain'
          />
      </View>
      <Text style={styles.title}>Welcome to the Unique Schools Alumni App</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, emailError ? styles.inputError : null]}
        placeholder="Email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={handleEmailChange}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      
      <TextInput
        style={[styles.input, passwordError ? styles.inputError : null]}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      {/* ... (remaining JSX code) */}
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
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (existing styles)
  container: {
    flex: 1,
    backgroundColor: '#f1b143', // Orange color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    // Add styles for your logo component
    //position: 'absolute',
    width: 70,
    height: 70,
    position: 'absolute',
    top: 80,
    left: 30,
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
    fontFamily: 'Work Sans ',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    fontFamily: 'Work Sans Light',
  },
  buttonsContainer: {
    //flexDirection: 'row',
    width: '100%' // Added to display buttons horizontally
  },
  button: {
    backgroundColor: '#2b2b33',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Added border radius for rounded buttons
    marginVertical: 5, // Added horizontal margin for spacing
    //flex: 1, // Added to make buttons equal length
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Added to center text in buttons
    fontFamily: 'Work Sans SemiBold'
  },
  registerButton: {
    backgroundColor: 'transparent',
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
    marginLeft: 10,
  },
  inputError: {
    borderWidth: 2,
    borderColor: 'red',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
});

export default LoginScreen;