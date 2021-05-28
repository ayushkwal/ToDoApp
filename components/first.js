
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';

export default function App() {

const [name,setname]=useState('');
const [people,setPeople]=useState([
  {name:'a',key:'1'},
  {name:'b',key:'2'},
  {name:'c',key:'3'},
  {name:'d',key:'4'},
  {name:'d',key:'5'},
  {name:'d',key:'6'},
  {name:'d',key:'7'},
  {name:'d',key:'8'},
])

const clickedtodelete=(id)=>{

  console.log(id);
  setPeople((prevPeople)=>prevPeople.filter(item=>item.key!=id))

}



  return (
    <View style={styles.container}>
      {/* <Text>{name}</Text>
      <Text>Open up App.js to stkjkkjddddtrtrereddddddddddddddddddk!</Text>
      <TextInput style={styles.input}
      placeholder='eg ayush'
      onChangeText= {(e)=>setname(e)}
      />
      <Text>{name}</Text> */}
      {/* <ScrollView>
      <View style={styles.item}>{people.map((item)=>
      <Text style={styles.itemany} key={item.key}>{item.name}</Text>
      )}
      </View>
      </ScrollView> */}
      {/* Lists and ScrollViews  */}

      {/* here we are going to use flat list to get larger list appear  */}
    <FlatList
    data={people}
    numColumns={2}
    renderItem={({item})=>(
      <TouchableOpacity onPress={()=>clickedtodelete(item.key)}>
      <Text style={styles.itemany}>{item.name}</Text>
      </TouchableOpacity>

    )} />


{/* Touchable Components */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    backgroundColor:'coral',
    marginTop:11,
    padding:12,
    width:340
  },
  item:{
    flexDirection:'column',
    padding:40
  },
  itemany:{
    padding:20,
      backgroundColor:'skyblue',
      marginTop:150
  }
});














   {/* <ScrollView>
    {todos.map(item=>
    <View style={styles.card}>
    <Text style={styles.title} > {item.title}  </Text>
    <Text style={styles.des}>{item.description}   </Text>
    </View>
    )}
    </ScrollView> */}