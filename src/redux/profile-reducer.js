const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Привет! Как дела?", likesCount: 4 },
    { id: 2, message: "Перезвони! Кое-что расскажу!", likesCount: 20 },
    { id: 3, message: "С Днем рождения!", likesCount: 101 },
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
    case UPDATE_NEW_POST_TEXT: 
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
