import React from 'react';
import AddTodo from './AddTodo';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from "./TodoList";

const useStyles = makeStyles(() => ({
    todoContainer: {
        margin: '20px'
    }
}))
const Todo = () => {
    const classes = useStyles();
    return <Card className={classes.todoContainer} >
        <CardContent>
            <AddTodo />
            <TodoList />
        </CardContent>
        <CardActions>
        </CardActions>
    </Card>
}
export default Todo;