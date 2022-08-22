import { fetchAllArticles } from "../api";
import { useEffect, useState } from "react";

const Home = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((fetchedArticles) => {
      setAllArticles(fetchedArticles.articles);
    });
  }, []);

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
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Home;
