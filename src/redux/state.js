const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Привет! Как дела?", likesCount: 4 },
                { id: 2, message: "Перезвони! Кое-что расскажу!", likesCount: 20 },
                { id: 3, message: "С Днем рождения!", likesCount: 101 },
            ],
            newPostText: ''  
        },
        
        dialogsPage:{
            messages: [
                { id: 1, text: "Привет, Васек!" },
                { id: 2, text: "Привет, как дела?" },
                { id: 3, text: "Привет, мы знакомы?" },
            ],
            newMessageText: '',
            dialogs: [
                { id: 1, name: "Alexey" },
                { id: 2, name: "Daha" },
                { id: 3, name: "Marina" },
                { id: 4, name: "Dmitriy" },
                { id: 5, name: "Sasha" },
            ]
        }
        
    },
    _callSubscriber() {
        console.log('State changed');
    },

    dispatch(action) {
      if (action.type === ADD_POST) {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
      } else if (action.type === ADD_DIALOG) {
        let newMessage = {
            id: 4,
            text: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber(this._state);
      }
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});    
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addDialogActionCreator = () => ({type: ADD_DIALOG});    
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;
window.store = store;