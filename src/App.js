import "./App.css";
import "./articlecard.css";
import "./navigation.css";
import "./topic.css";
import "./commentcard.css";
import "./usercard.css";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Article from "./components/Article";
import Users from "./components/Users";
import { UserContext } from "./context/user";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "tickle122",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <Title />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topic_name" element={<Home />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route
              path="/articles/:article_id/comments"
              element={<Article />}
            />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
