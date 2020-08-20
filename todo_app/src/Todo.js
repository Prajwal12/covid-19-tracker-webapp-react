//type "rfce" and enter
import React, {useState}  from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './Todo.css';
import {List, ListItem, ListItemText, ListItemAvatar, Button, Modal } from '@material-ui/core'
import db from './firebase';
import {makeStyles} from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//       position: 'absolute',
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//   }));

  
function Todo(props) {

    // const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = ()=>{
        setOpen(true);
    }
    
    const updateTodo = ()=>{
        db.collection('todos').doc(props.todo.id).set({
            todo : input
        }, {merge : true})
        setOpen(false);
    }

    return (
        <>
        <Modal
            open={open}
            onClose={ e => setOpen(false)}>
            <div>
                <h1>I am a Modal</h1>
                <input inplace = {props.todo.todo} value ={input} onChange = {event => setInput(event.target.value)}> </input>
                <Button onClick = {e=> setOpen(false)}>Update Todo</Button>

            </div>
        </Modal>

        <List classname="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>        
                <ListItemText primary={props.todo.todo} secondary = "Stay Motivated and Complete!!"/>
             </ListItem>
             {/* <Button onClick = {e => setOpen(true)}>Edit</Button> */}
             <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
