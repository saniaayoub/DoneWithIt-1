import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({route, navigation}) => {
  return {
    title: route.name,
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    headerLeft: () => {
      return (
        <Icon
          name="bars"
          color={'#0fadad'}
          size={25}
          style={{paddingHorizontal: 5}}
          onPress={() => navigation.openDrawer()}
        />
      );
    },
    headerStyle: {
      backgroundColor: '#DCDCDC',
      shadowColor: 'transparent',
    },
  };
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
});
