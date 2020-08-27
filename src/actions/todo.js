let id = 0;

export const addTodoAction = (todo) => ({
    type: "ADD_TODO",
    payload: { todo, id: id++ },
})

export const deleteTodoAction = (id) => ({
    type: "DELETE_TODO",
    payload: { id },
})

