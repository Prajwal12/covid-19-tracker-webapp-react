import React, {useState, useEffect} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos, setTodods] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new tools as new gets added 
  useEffect(()=>{ 
    //this code here fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
        setTodods(snapshot.docs.map(doc => ({id : doc.id, todo : doc.data().todo})))
    })
  }, []);


  const addTodo = (event) =>{
    event.preventDefault(); //this will not allow to refresh the page 
    db.collection('todos').add({
      todo : input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('') //clear the input
  }

  return (
    <div className="App">
      
      <h1>Hello! Here is Your Todo List</h1>
      <form>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange ={event => setInput(event.target.value)} />
        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
      </FormControl>
      <Button disabled={!input} variant="contained" color="primary" type = "submit" onClick= {addTodo}>Add Todo</Button>
      </form>
        <ul>
          {todos.map(todo => (
            <Todo text todo = {todo}/>
            //<li>{todo}</li>
          ))}
         
        </ul>
        
    </div>
    
  );
}

export default App;
