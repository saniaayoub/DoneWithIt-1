import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { useEffect, useState, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const cart = ({ navigation }) => {
    let list = useSelector((state) => state.CartReducer.list);
    const [total, setTotal] = useState(0.00);
    const dispatch = useDispatch();
    const orderDone = () => {
        dispatch({ type: "CLEAR_CART" });
        setTotal(0.00);
        alert("your order has been placed \n Thank you for shopping");
    }

    useEffect(() => {
        list.forEach(element => {
            setTotal(total + (element.price * element.Qty));
        });
    }, list)
    return (
        <ScrollView>
        
            {list.map((elem) => 
            {
                return (
                    <View style={[Styles.card, Styles.cardShadow]} key={elem.id}>
                    <Image source={elem.image}
                    style={Styles.image}
                    resizeMode="contain"/>
                
                    <View style={Styles.desc}>
                        <Text  style={Styles.title}> Product: {elem.title}</Text>
                        <Text  style={Styles.title}> Qty: {elem.Qty}</Text>
                        <Text  style={Styles.title}> Price: {elem.price}</Text>
                    </View>
                 </View>            
                );
            })}
                
                 <View  style={Styles.total}>
                <TextInput value={total}/>
                    <Text style={Styles.text}> Amount </Text>
                </View>

            <TouchableOpacity  style={Styles.button} onPress={()=> {orderDone()}}>
                <Text> CHECK OUT </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


export default cart;

const Styles = StyleSheet.create({
    card:{
        marginTop:30,
        height: 200,
        borderRadius:35,
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor:'#fff',
        marginHorizontal: 5,
        marginBottom:30
    },
   image:{
       height: "100%",
       width: '40%'
   },
   desc:{
       justifyContent: 'center', //Centered horizontally
       flex:1
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
    title:{
        fontFamily: 'DMSans-Bold',
        fontSize:15,
        paddingVertical: 5
    },
    total:{
    paddingHorizontal:30,
    paddingVertical:30,
    borderTopColor: '#ededed',
    borderTopWidth: 3,
    borderBottomColor: '#ededed',
    borderBottomWidth: 3,
  },
text:{
    fontFamily: 'DMSans-Bold',
    fontSize:15,
  },
button: {
    margin: 30,
    paddingVertical:20,
    alignItems: 'center',
    backgroundColor: '#afafda',
    borderRadius: 50
}

})
