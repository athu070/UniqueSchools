import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface LoginScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  useEffect(() => {
    const validate = setTimeout(() => {
      if (email && !validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }, 500);

    return () => clearTimeout(validate);
  }, [email]);

  useEffect(() => {
    const validate = setTimeout(() => {
      if (password && !validatePassword(password)) {
        setPasswordError('Password must be at least 8 characters long and contain a mix of letters, numbers, and special characters.');
      } else {
        setPasswordError('');
      }
    }, 500);

    return () => clearTimeout(validate);
  }, [password]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (): void => {
    if (validateEmail(email) && validatePassword(password)) {
      navigation.navigate('Home');
    } else {
      if (!validateEmail(email)) setEmailError('Please enter a valid email address.');
      if (!validatePassword(password)) setPasswordError('Password must be at least 8 characters long and contain a mix of letters, numbers, and special characters.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../src/logo_pastpupil.png')}
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
          onChangeText={setEmail}
          accessibilityLabel="Email input"
          accessibilityHint="Enter your email address"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TextInput
          style={[styles.input, passwordError ? styles.inputError : null]}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          accessibilityLabel="Password input"
          accessibilityHint="Enter your password"
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <TouchableOpacity style={styles.forgotPasswordButton} accessibilityLabel="Forgot password button" accessibilityHint="Navigate to password recovery">
          <Text style={styles.forgotPasswordText}>Forgot password</Text>
        </TouchableOpacity>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin} accessibilityLabel="Login button" accessibilityHint="Attempt to log in with entered credentials">
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => navigation.navigate('Register')} accessibilityLabel="Register button" accessibilityHint="Navigate to registration page">
            <Text style={[styles.buttonText, styles.registerButtonText]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1b143', // Orange color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: 80,
    left: 30,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2b2b33',
    paddingVertical: 10,
    width: '100%',
    borderRadius: 20,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'navy',
  },
  registerButtonText: {
    color: 'black',
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
});

export default LoginScreen;
