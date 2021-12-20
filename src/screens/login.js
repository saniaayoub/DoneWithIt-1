import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Auth} from '../services';

// import {AuthContext} from '../Components/context';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [data, setData] = useState({
  //     username: '',
  //     password: '',
  //   });
  //   const {signIn} = useContext(AuthContext);

  //   const handleTextInputChange = val => {
  //     setData({
  //       ...data,
  //       username: val,
  //     });
  //   };
  //   const handlePasswordInputChange = val => {
  //     setData({
  //       ...data,
  //       password: val,
  //     });
  //   };
  //   const loginHandle = (userName, password) => {
  //     signIn(userName, password);
  //   };
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.welcomeText}> Welcome back User</Text>
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
        <View style = {{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => {
              Auth.signIn(email, password);
            }}>
            <Text style={styles.Text}> Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style = {{marginBottom: 10}} >
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => {
              navigation.push('SignUp');
            }}>
            <Text style={styles.Text}> Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style = {{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => {
              navigation.push('ForgetPassword');
            }}>
            <Text style={styles.Text}> Forget Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
  welcomeText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  Btn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
  },
  Text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
