import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Products from '../Components/Products'
import { useState } from 'react'
import {useDispatch } from 'react-redux';

function Productdetails({route, navigation}) {
    
    const dispatch = useDispatch();
    const [Qty, setQty] = useState(0);
    let {itemID} = route.params;
    const {id, image, title, price, description} = Products[itemID-1];
    const increment = () =>{
        
        setQty(Qty+1)
    }
    
    const decrement = () =>{
        if(Qty>0){
            setQty(Qty-1)
        }
    }
    const addToCart = (itemID) => {
        if(Qty === 0){
            alert("Cannot Add to cart");
        }
        else {
            dispatch({ type: "ADD_TO_CART", payload: { id: id, Qty: Qty } });
            alert("Successfully added to Cart");
            navigation.goBack();
        }
    }
    return (
        <ScrollView >

            <View style={Styles.container}>
                <Image
                source={image}
                resizeMode={"contain"}
                style={Styles.image}
                ></Image>
            </View>
            <View>
                <Text style={Styles.title}>{title}</Text>
                <Text style={Styles.price}> Price: {price}</Text>
                <View style={Styles.buttonWrap}> 
                    <Icon
                        name="plus" color={"#333"} size={25} style={Styles.btn} onPress={()=> increment()}
                    />
                    
                    <Icon
                        name="minus" color={"#333"} size={25}  style={Styles.btn} onPress={()=> decrement()}
                    />
                </View>
                 <Text style={Styles.desc}> Quantity: {Qty}</Text>
                <Text style={[Styles.button, Styles.btn]}
                    onPress={() => addToCart(id)}>ADD TO CART</Text>
                <Text style={Styles.desc}>{description}</Text>
            </View>
            
        </ScrollView>
    )
}
export default Productdetails;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        paddingTop: 20
    },
    image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    },
    title: {
        textAlign: 'center',
        marginVertical: 30,
        fontFamily: "DMSans-Bold",
        fontSize: 20
    },
    price: {
        textAlign: 'center',
        fontFamily: "DMSans-Bold",
        fontSize: 20
    },
    buttonWrap:{
        flex:1,
        paddingHorizontal: 30  
    },
    button: {
        backgroundColor: '#afafda',
        marginVertical: 20,
        textAlign: 'center',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontFamily: "DMSans-Bold",
        fontSize: 15
    },
    btn:{
        flexDirection: 'row'
    },
    desc: {
        textAlign: 'center',
        paddingBottom: 20
    }
    
});
