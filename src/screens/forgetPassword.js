import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { Auth } from '../services';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}> Change Password </Text>
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            placeholderTextColor="#333"
            value={email}
            onChangeText={val => setEmail(val)}
          />
        </View>
      
        <TouchableOpacity
          style={styles.fpsignInBtn}
          onPress={() => {
            Auth.forgetPassword(email);
          }}>
          <Text style={styles.fpText}> Change Password </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;

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
  fpBtn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
  },
  fpText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
