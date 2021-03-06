const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      let newMessage = {
        id: 4,
        text: state.newMessageText,
      };
      return {
        ...state,

      messages: [...state.messages, newMessage],      
      newMessageText: ""
    }
    case UPDATE_NEW_MESSAGE_TEXT: 
    return {
      ...state,
      newMessageText: action.newText
    }  
    default:
      return state;
  }
};

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const onMessageChangeActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
