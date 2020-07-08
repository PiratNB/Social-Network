import { rerenderEntireTree } from "../render";

let state = {
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
    
};

export let addDialog = () => {
    let newMessage = {
        id: 4,
        text: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;