import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Привет! Как дела?", likesCount: 4 },
            { id: 2, message: "Перезвони! Кое-что расскажу!", likesCount: 20 },
            { id: 3, message: "С Днем рождения!", likesCount: 101 },
        ]   
    },
    
    dialogsPage:{
        messages: [
            { id: 1, text: "Привет, Васек!" },
            { id: 2, text: "Привет, как дела?" },
            { id: 3, text: "Привет, мы знакомы?" },
        ],
        dialogs: [
            { id: 1, name: "Alexey" },
            { id: 2, name: "Daha" },
            { id: 3, name: "Marina" },
            { id: 4, name: "Dmitriy" },
            { id: 5, name: "Sasha" },
        ]
    }
    
};

export let addDialog = (dialogMessage) => {
    let newPost = {
        id: 4,
        text: dialogMessage
    };

    state.dialogsPage.messages.push(newPost);
    rerenderEntireTree(state);
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;