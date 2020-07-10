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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addDialog() {
        let newMessage = {
            id: 4,
            text: this._state.dialogsPage.newMessageText
        };
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
    
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
    
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;
window.store = store;