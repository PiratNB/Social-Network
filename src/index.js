import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: "Привет! Как дела?", likesCount: 4 },
  { id: 2, message: "Перезвони! Кое-что расскажу!", likesCount: 20 },
  { id: 3, message: "С Днем рождения!", likesCount: 101 },
];

let dialogs = [
  { id: 1, name: "Alexey" },
  { id: 2, name: "Daha" },
  { id: 3, name: "Marina" },
  { id: 4, name: "Dmitriy" },
  { id: 5, name: "Sasha" },
];

let messages = [
  { id: 1, text: "Привет, Васек!" },
  { id: 2, text: "Привет, как дела?" },
  { id: 3, text: "Привет, мы знакомы?" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs= {dialogs} messages= {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
