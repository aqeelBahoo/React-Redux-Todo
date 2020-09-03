import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteTodoAction, handleTodoStatusAction } from '../actions/todo';

const TodoList = ({ todoList, dispatch }) => {
    const handleTodo = (id) => {
        dispatch(handleTodoStatusAction(id));
    }
    return <List>
        {todoList.map(({ name, id, completed }) => {
            return (
                <ListItem key={id} dense button onClick={() => handleTodo(id)} >
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={completed}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={id + ' ' + name} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" color="secondary" onClick={() => dispatch(deleteTodoAction(id))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            );
        })}
    </List>;
}

function getFilteredList(state) {
    if (state.filter === "COMPLETED") {
        return state.todoList.filter((todo) => todo.completed === true);
    } else if (state.filter === "INCOMPLETE") {
        return state.todoList.filter((todo) => todo.completed === false);
    } else {
        return state.todoList;
    }
}

const mapStateToProps = (state) => ({
    todoList: getFilteredList(state),
})

export default connect(mapStateToProps, null)(TodoList);