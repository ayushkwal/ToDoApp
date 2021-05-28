
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView,FlatList,TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard, } from 'react-native';
import Addtodo from './components/Addtodo'
import Sandbox from './components/sandbox'
import { MaterialIcons } from '@expo/vector-icons';
export default function App() {

  const [todos,setTodos] = useState([
    {key:'1',title:'This is a blog',description:'You are really welcome to blog of this site 1'},
    {key:'2',title:'This is a blog 2',description:'You are really welcome to blog of this site 2'},
    {key:'3',title:'This is a blog 3',description:'You are really welcome to blog of this site 3'},
    {key:'4',title:'This is a blog 3',description:'You are really welcome to blog of this site 3'},
    {key:'5',title:'This is a blog 3',description:'You are really welcome to blog of this site 3'},
    {key:'6',title:'This is a blog 3',description:'You are really welcome to blog of this site 3'},
    {key:'7',title:'This is a blog 3',description:'You are really welcome to blog of this site 3'},
    {key:'8',title:'This is a blog 3',description:'You are really welcome to blog of this site 3'},
  ])

const deleteme = (key)=>{
  console.log(key)
  setTodos((prevTodos )=>
    prevTodos.filter(todo=>todo.key!=key))
}

const submitHandler = (data)=>{
  if(data.description.length > 4)
  {
    console.log('going to submit');
    console.log(data.title,data.description);
    setTodos((prevTodos)=>[...prevTodos , {title:data.title,description:data.description,key:Math.random().toString()+11}])
  
  }
  else{
    console.log('getted');
    Alert.alert('Oops!','Enter valid description',[
     { text:'Understood',
      onPress:()=>{console.log('alert');}
    }
    ]);
  }
}



  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
    
  <View style={styles.container}>
      {/* Heading  */}
  <Text style={styles.heading}>TO DO NOTE</Text>
  <View>
 


    <Addtodo submitHandler = {submitHandler}/>
    <View style={styles.list}>
    <FlatList
    data={todos}
    renderItem={({item})=>
      
      <TouchableOpacity onPress={()=>deleteme(item.key)}>
<View style={styles.card}>
  <View style={styles.line1}>
<MaterialIcons name="delete" size={34} color="twitter" />
    <Text style={styles.title} > {item.title}  </Text>
    </View>
    <Text style={styles.des}>{item.description}   </Text>
    </View>
    </TouchableOpacity>
  }
    />
</View>
  </View>
  </View>
  </TouchableWithoutFeedback>
  );
 
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:24
  },
  heading:{
    fontSize:20,
    padding:10,
    backgroundColor:'coral',
    color:'white',
    fontWeight:"400",
    textAlign:'center',
    
  },
  card:{
    marginTop:35,
    backgroundColor:'pink',
    flexDirection:'column',
    padding:24,
    marginHorizontal:20,
    
  },
  title:{
    fontSize:32,
    color:'crimson',
  },
  des:{
    fontSize:22,
    color:'purple',
  },list:{
    flex:1,
    marginBottom:20,
    paddingBottom:13
  },
  line1:{
    flexDirection:'row'
  }

 
  
 
});
