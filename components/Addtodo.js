import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView,FlatList,TouchableOpacity,Button,Alert} from 'react-native';

export default function Addtodo({submitHandler}) {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const changeHandler1=(e)=>{
        console.log(e);
        setTitle(e);
    }
    const changeHandler2=(e)=>{
        setDescription(e);
        console.log(e);
    }



    return (
       
    //this is for adding todo

    <View style={styles.addtodo}>
        <TextInput style={styles.input} name="title" placeholder="this is title..." onChangeText={(e)=>changeHandler1(e)}/>
        <TextInput style={styles.input} name="description" placeholder="this is description..." onChangeText={(e)=>changeHandler2(e)}/>
        <Button title="Add Todo" onPress={()=>submitHandler({title,description})}/>
    </View>
    
    
    
    )
        }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:24
      },
      input:{
          padding:12,
          backgroundColor:'pink',
          marginHorizontal:20,
          marginVertical:20
      },
      addtodo:{
          marginHorizontal:40
      }
    
      
     
    });
