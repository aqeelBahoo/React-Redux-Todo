import { combineReducers } from "redux";

export default combineReducers({
    todoList: (state = [], action) => {
        switch (action.type) {
            case "ADD_TODO":
                return [...state, action.payload];
            case "DELETE_TODO":
                return state.filter(({ id }) => id !== action.payload.id)
            default:
                return state;
        }
    }
})