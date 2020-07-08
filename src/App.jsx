import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Dialogs from "./components/dialogs/dialogs";
import Profile from "./components/profile/profile";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                addDialog={props.addDialog}
                updateNewMessageText={props.updateNewMessageText}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
