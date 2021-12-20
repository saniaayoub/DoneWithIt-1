import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const signUp =  async (fullName, email, password) => {
  if (!fullName || !email || !password) {
    Alert('Error', 'Please Enter All Fields');
  }
  return await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

     console.error(error);
    });
};

const signIn = async (email, password) => {
  if (!email || !password) {
    Alert('Error', 'Please Enter All Fields');
  }
  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(err => Alert(err.code, err.message));
};

const forgetPassword = email => {
  if (!email) {
    Alert('Error', 'Please Enter Email');
  }
  return auth().sendPasswordResetEmail(email);
};

const signOut = () => {
  return auth().signOut();
};

const Auth = {
  signUp,
  signIn,
  forgetPassword,
  signOut,
};

export default Auth;
