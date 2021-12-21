import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const signUp = (fullName, email, password) => {
  if (!fullName || !email || !password) {
    Alert('Error', 'Please Enter All Fields');
  }
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      const { uid } = cred.user;
      
      auth().currentUser.updateProfile({
        displayName: fullName
      })
      return uid;
    }).catch(
      err => Alert.alert(err.code, err.message)
    )
    
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
