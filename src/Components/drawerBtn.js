import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { AuthContext } from './context';
import { useContext } from 'react';

const DrawerBtn = (props) => {

    const { signOut } = useContext(AuthContext);
    return (
        <TouchableOpacity onPress={() => {
            if (props.title == "Sign out") {
                signOut();
            }
            else {
                props.setCurrentTab(props.title);
               props.navigation.navigate(props.title);
            }
            
        }}>
        <View style= {[styles.tabBtn, {backgroundColor: props.currentTab == props.title ? 'white' : 'transparent'}]}>
            <Icon name={props.icon} color={"#0fadad"} size={25} style={{ width: 25, height: 25 }} />
            <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                paddingLeft: 15
                }}> {props.title} </Text>
        </View>
    </TouchableOpacity>
    )
}

export default DrawerBtn;

const styles = StyleSheet.create({
    tabBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 10,
        paddingRight: 20,
        borderRadius: 8,
        marginTop: 15
    }
})
