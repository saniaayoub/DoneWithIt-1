import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useContext } from 'react';


const Profile = () => {
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phNum, setPhNum] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");

    const saveInfo = () => {
        if(name && email && phNum && city && address){
            AsyncStorage.setItem("name1", name);
            AsyncStorage.setItem("email", email);
            AsyncStorage.setItem("phNum", name);
            AsyncStorage.setItem("city", city);
            AsyncStorage.setItem("address", name);
            setName("");
            setEmail("");
            setPhNum("");
            setCity("");
            setAddress("");
            alert("Your Info is Updated");
            AsyncStorage.getItem("name1").then((value) => {setUserName(value)});
        }
        else{
            alert("Please fill all fields");
        }
    }
    

    const getInfo = () => {
        AsyncStorage.getItem("name1").then((value) => {setUserName(value)});
    }
    return (
         <ScrollView>
                <View style={{backgroundColor: '#f2f5f8'}}>
                    <View style = {styles.backContainer}>
                       
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image
                        style={{width: 140, height: 140, borderRadius:140/2, marginTop:-50}}
                        source={require('../assets/images/car.jpg')}>
                        </Image>
                    </View>
                    <TouchableOpacity  style={styles.upload}>
                            <Text style={styles.uploadText}> + </Text>
                    </TouchableOpacity>
                {userName ?
                    (
                        <Text style={styles.title}>{userName}</Text>
                    ) : (
                        <Text style={styles.title}>{ "Sania"}</Text>
                    )}
                    <View style={styles.container}>
                        <View style={styles.sectionStyle}>
                            <Icon
                                name="user" color={"#0fadad"} size={25} style={{paddingHorizontal: 5}}
                            /> 
                            <TextInput
                                style={{flex: 1}}
                                placeholder="Enter Your Name Here"
                                underlineColorAndroid="transparent"
                                value={name} 
                                onChangeText={ (data) => setName(data)}
                            />
                            </View>
                        <View style={styles.sectionStyle}>
                            <Icon
                                name="envelope" color={"#0fadad"} size={25} style={{paddingHorizontal: 5}}
                            /> 
                            <TextInput
                                style={{flex: 1}}
                                placeholder="Enter Your Email Here"
                                underlineColorAndroid="transparent"
                                value={email}
                                onChangeText={ (data) => setEmail(data)}
                            />
                        </View>

                        <View style={styles.sectionStyle}>
                            <Icon
                                name="phone-alt" color={"#0fadad"} size={25} style={{paddingHorizontal: 5}}
                            /> 
                            <TextInput
                                style={{flex: 1}}
                                placeholder="Enter Your Phone no Here"
                                underlineColorAndroid="transparent"
                                value={phNum} 
                                onChangeText={ (data) => setPhNum(data)}
                            />
                        </View>
                        <View style={styles.sectionStyle}>
                            <Icon
                                name="city" color={"#0fadad"} size={25} style={{paddingHorizontal: 5}}
                            /> 
                            <TextInput
                                style={{flex: 1}}
                                placeholder="Enter Your City Here"
                                underlineColorAndroid="transparent"
                                value={city} 
                                onChangeText={ (data) => setCity(data)}
                            />
                        </View>
                        <View style={styles.sectionStyle}>
                            <Icon
                                name="address-card" color={"#0fadad"} size={25} style={{paddingHorizontal: 5}}
                            /> 
                            <TextInput
                                style={{flex: 1}}
                                placeholder="Enter Your Address Here"
                                underlineColorAndroid="transparent"
                                value={address} 
                                onChangeText={ (data) => setAddress(data)}
                            />
                    </View>
                    
                         <TouchableOpacity  style={styles.button}>
                            <Text style={styles.text} onPress= {() => saveInfo()}> SAVE</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </ScrollView>
    )
}
export default Profile;

const styles = StyleSheet.create({
    backContainer: {
        backgroundColor: "#daf9fa",
        height: 150
    },
    title:{
        textAlign: 'center',
         margin: 10, 
         fontFamily: 'DMSans-Bold',
         fontSize: 20
        },
        upload:{
            
            marginTop: -15,
            alignItems: 'center',
            justifyContent: 'center'
        },
        uploadText:{
            fontFamily: 'DMSans-Bold',
            fontSize:20,
            backgroundColor: '#ffe',
        },
        myCard:{
            margin:5,
            flex: 1,
            width: 350
        },
        cardContent:{
            padding: 10,
            backgroundColor: 'white'
        },
        cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  button:{
    width: 219,
    margin: 30,
    paddingVertical:20,
    alignItems: 'center',
    backgroundColor: '#0fadad',
    borderRadius: 30
  },
  text:{
    fontFamily: 'DMSans-Bold',
    fontSize:20,
  },

})
