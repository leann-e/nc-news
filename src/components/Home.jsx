import {
  fetchAllArticles,
  fetchArticleById,
  fetchArticlesByTopic,
} from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [articleInfo, setArticleInfo] = useState({});
  const { topic_name } = useParams();

  useEffect(() => {
    if (!topic_name) {
      fetchAllArticles().then((fetchedArticles) => {
        setAllArticles(fetchedArticles.articles);
      });
    } else
      fetchArticlesByTopic(topic_name).then((topic) => {
        setAllArticles(topic.articles);
      });
  }, [topic_name]);

  return (
    <>
      <section>
        <ul className="article_card--list">
          {allArticles.map((article) => {
            return (
              <li className="article_card" key={article.article_id}>
                <p className="article_card--title">{article.title}</p>
                <p className="article_card--author">Author: {article.author}</p>
                <p className="article_card--topic">Topic: {article.topic}</p>
                <p className="article_card--votes">Votes: {article.votes}</p>
                <p className="article_card--comments">
                  Comments: {article.comment_count}
                </p>
                <button className="article_card--button">
                  <Link to={`/articles/${article.article_id}`}>Read More</Link>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Home;
