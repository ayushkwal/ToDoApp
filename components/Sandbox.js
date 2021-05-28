import React,{useState} from 'react';
import {StyleSheet, Text,View} from 'react-native'

export default function Sandbox(){


 return(
    <View style={styles.container}>
    <Text style={styles.box1}>Hello</Text>
    <Text  style={styles.box2}>Hello</Text>
    <Text  style={styles.box3}>Hello</Text>
    <Text  style={styles.box4}>Hello</Text>
    </View>
   
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop:26,
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-around'

    },
    box1:{
        flex:1,
        padding:5,
        backgroundColor:'skyblue',
        
    },
    box2:{
        flex:3,
        padding:10,
        backgroundColor:'pink',
     
    },
    box3:{
        padding:15,
        backgroundColor:'coral',
       
        
    },
    box4:{
        padding:20,
        backgroundColor:'maroon'
    }
})