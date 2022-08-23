import "./App.css";
import "./articlecard.css";
import "./navigation.css";
import "./topic.css";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic_name" element={<Home />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
