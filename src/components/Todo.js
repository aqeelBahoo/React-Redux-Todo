import React from "react";
import AddTodo from "./AddTodo";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TodoList from "./TodoList";
import Filters from "./Filters";

const useStyles = makeStyles(() => ({
  todoContainer: {
    margin: "20px",
  },
  title: {
    textAlign: "center",
  },
}));
const Todo = () => {
  const classes = useStyles();
  return (
    <Card className={classes.todoContainer}>
      <CardContent>
        <h1 className={classes.title}>Advance Todo</h1>
        <Filters />
        <AddTodo />
        <TodoList />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
export default Todo;
