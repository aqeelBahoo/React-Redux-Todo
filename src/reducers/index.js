import { combineReducers } from "redux";

export default combineReducers({
    todoList: (state = [], action) => {
        switch (action.type) {
            case "ADD_TODO":
                return [...state, action.payload];
            case "DELETE_TODO":
                return state.filter(({ id }) => id !== action.payload.id);
            case "TODO_STATUS":
                const index = state.findIndex((todo) => todo.id === action.payload.id);
                state[index] = { ...state[index], completed: !state[index].completed };
                return [...state];
            default:
                return state;
        }
    },
    filter: (state = "ALL", action) => {
        switch (action.type) {
            case "SET_FILTER":
                return action.payload.filter;
            default:
                return state;
        }
    }
})