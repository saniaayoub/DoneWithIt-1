import React from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native';
import Products from './Products';


const Home = ({navigation}) => {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={[styles.card, styles.cardShadow]} onPress={()=> navigation.push("Productdetails", {itemID: item.id})}>
                <Image 
                    source={item.image}
                    style={styles.image}
                    resizeMode="contain"
                    />
                <View style={styles.cardDesc}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text>{item.price}</Text>
                </View>
            </TouchableOpacity>

        );
    }
    return (
        
       <SafeAreaView>
                <FlatList 
                style={styles.grid}
                data={Products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={{paddingBottom:20}}
                />
        </SafeAreaView>
    )
}

export default Home;
const styles = StyleSheet.create({
    grid: {
        paddingHorizontal:15,
        paddingTop: 30
    },
    image: {
        
        width:"100%",
        height: "70%",
    },
    card: {
        flex: 1,
        height: 219,
        marginHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 35,
        overflow:'hidden',
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
    cardDesc: {
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#afafdf'
    },
    cardTitle: {
        textAlign: 'center'
    }
})

