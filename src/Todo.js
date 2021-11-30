import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Modal } from '@material-ui/core';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@material-ui/core';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import './Todo.css'

const styles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
  }));

function Todo(props) {
    const classes = styles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    // const handleOpen =() => {
    //     setOpen(true);
    // };

    const updateTodo = () => {
        // update the todo with the new unput text

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });

        setOpen(false);
    };

    return (
        <>
        <Modal 
            open={open} 
            onClose={e => setOpen(false)}
        >
        <div className={classes.paper}>
            <h1>Update Here</h1>
            <input placeholder={props.todo.todo} value={input} onChange={evant => setInput(evant.target.value)}/>
            <Button onClick={updateTodo}>Update Todo</Button>
        </div>  
        </Modal>
        
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Deadline" />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={evant => db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</DeleteForeverIcon>
        </List>
        </>
    )
}

export default Todo;
