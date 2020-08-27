import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addTodoAction } from "./../actions/todo";

const useStyles = makeStyles(() => ({
    addBtn: {
        marginLeft: '20px',
        marginTop: "10px"
    }
}))

const AddTodo = ({ dispatch }) => {
    let [todoField, setTodoField] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if (!todoField.trim()) {
            return;
        }
        dispatch(addTodoAction(todoField));
        setTodoField("");
    }
    const classes = useStyles();
    return (<form onSubmit={submit}>
        <TextField label="Write todo" value={todoField} onChange={(e) => setTodoField(e.target.value)} />
        <Button type="submit" className={classes.addBtn} variant="contained" color="primary" disableElevation>
            Add
    </Button>
    </form>);
}
export default connect()(AddTodo);