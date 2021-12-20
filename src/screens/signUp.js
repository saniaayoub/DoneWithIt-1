import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Auth} from '../services';
import {useState} from 'react';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}> Create Account </Text>
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Username"
            placeholderTextColor="#333"
            value={userName}
            onChangeText={val => setUserName(val)}
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            placeholderTextColor="#333"
            value={email}
            onChangeText={val => setEmail(val)}
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter Password"
            placeholderTextColor="#333"
            value={password}
            onChangeText={val => setPassword(val)}
          />
        </View>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => Auth.signUp(userName, email, password)}>
          <Text style={styles.signUpText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formWrapper: {
    width: '80%',
  },
  formRow: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#ddd',
    height: 40,
    paddingHorizontal: 10,
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  signUpBtn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
  },
  signUpText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
