import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity  } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos,setTodos]=useState(
    [
      {text:'buy coffee',key:'1'},
      {text:'create an app',key:'2'},
      {text:'play on the switch',key:'3'},
      
    ]);
    const pressHandler=()=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo=>todo.key!=key);
      });

    }
    const submitHandler=(text)=>{
      setTodos((prevTodos)=>{
        return [
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ]
      });
    }
   
  return (
    <View style={styles.container}>
      <Header/>
     <View styles={styles.content}>
       <AddTodo/>
    <View styles={styles.list}>
      <FlatList
      data={todos}
      renderItem={({item})=>(
      <TodoItem item={item}/>
      
      )}/>
      
    </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    //alignItems:  'center',
    //justifyContent: 'center',
  },
  content:{
    padding:40,
    marginLeft:40,
    backgroundColor:'yellow',
    
  },
  list:{
    marginTop:20,
    backgroundColor:'yellow',

  }
  
});


