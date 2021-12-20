import React from 'react';
import profileImg from '../assets/images/profile.jpg';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import DrawerBtn from '../Components/drawerBtn';
import {useState} from 'react';

const DrawerContent = props => {
  const [currentTab, setCurrentTab] = useState('Profile');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', padding: 20}}>
        <Image source={profileImg} style={styles.image} />
        <Text style={styles.userName}> Sania Ayoub </Text>

        <View style={{flexGrow: 1, marginTop: 50}}>
          {
            //tab
          }
          <DrawerBtn
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'Profile'}
            icon={'user'}
            navigation={props.navigation}
          />
          <DrawerBtn
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'Home'}
            icon={'home'}
            navigation={props.navigation}
          />
          <DrawerBtn
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'Cart'}
            icon={'cart-arrow-down'}
            navigation={props.navigation}
          />
        </View>

        <View>
          <DrawerBtn
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={'Sign out'}
            icon={'sign-out-alt'}
          />
        </View>
      </View>

      <View>
        {
          //Overlay
        }
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginTop: 0,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
});
