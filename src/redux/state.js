import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Привет! Как дела?", likesCount: 4 },
        { id: 2, message: "Перезвони! Кое-что расскажу!", likesCount: 20 },
        { id: 3, message: "С Днем рождения!", likesCount: 101 },
      ],
      newPostText: "",
    },

    dialogsPage: {
      messages: [
        { id: 1, text: "Привет, Васек!" },
        { id: 2, text: "Привет, как дела?" },
        { id: 3, text: "Привет, мы знакомы?" },
      ],
      newMessageText: "",
      dialogs: [
        { id: 1, name: "Alexey" },
        { id: 2, name: "Daha" },
        { id: 3, name: "Marina" },
        { id: 4, name: "Dmitriy" },
        { id: 5, name: "Sasha" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
