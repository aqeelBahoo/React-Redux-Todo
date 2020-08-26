import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => ({
    addBtn: {
        marginLeft: '20px',
        marginTop: "10px"
    }
}))

const AddTodo = () => {
    const classes = useStyles();
    return (<>
        <TextField label="Write todo" />
        <Button className={classes.addBtn} variant="contained" color="primary" disableElevation>
            Add
    </Button>
    </>);
}

export default AddTodo;