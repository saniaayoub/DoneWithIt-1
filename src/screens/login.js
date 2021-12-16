import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useState , useContext} from 'react';
import { AuthContext } from '../Components/context';

const Login = ({navigation}) => {
    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");
    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const {signIn} = useContext(AuthContext);

    const handleTextInputChange = (val) => {
            setData({
                ...data,
                username: val,
            })
        }
    const handlePasswordInputChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }
    const loginHandle = (userName, password) => {
        signIn(userName, password);
    }
    return(
            <View style={styles.container}>
                <View style={styles.formWrapper}>
                    <Text style={styles.welcomeText}> Welcome back User</Text>
                    <View style={styles.formRow}>
                        <TextInput style={styles.textInput} 
                        placeholder="Enter Username" 
                        placeholderTextColor="#333" 
                        value={data.username} 
                        onChangeText={ (val) => handleTextInputChange(val)}/>
                    </View>
                    <View style={styles.formRow}>
                        <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter Password" 
                        placeholderTextColor="#333"
                        value={data.password} 
                        onChangeText={(val) => handlePasswordInputChange(val)}
                        />
                    </View>
                    <TouchableOpacity style={styles.signInBtn}
                    onPress={()=> {loginHandle(data.username, data.password)}}> 
                        <Text style={styles.signInText}> Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formWrapper: {
        width:'80%'
    },
    formRow:{
        marginBottom: 10
    },
    textInput: {
        backgroundColor: '#ddd',
        height:40,
        paddingHorizontal:10,
        color: '#333'
    },
    welcomeText:{
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold'
    },
    signInBtn:{
        backgroundColor:"blue",
        paddingVertical:10
    },
    signInText:{
        textAlign:'center',
        color:'#fff',
        fontSize: 18,
        fontWeight:'bold'
    }
});

