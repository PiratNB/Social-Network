import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReduser from "./users-reduser";

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReduser
});

let store = createStore(reducers);

window.store = store;

export default store;