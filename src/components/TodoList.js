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
import { deleteTodoAction } from '../actions/todo';
const TodoList = ({ todoList, dispatch }) => {
    return <List>
        {todoList.map(({ todo, id }) => {
            return (
                <ListItem key={id} role={undefined} dense button  >
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            // checked= 
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={todo + ' ' + id} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments" onClick={() => dispatch(deleteTodoAction(id))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            );
        })}
    </List>;
}

const mapStateToProps = (state) => ({
    todoList: state.todoList
})

export default connect(mapStateToProps, null)(TodoList);