import { fetchAllArticles, fetchArticlesByTopic } from "../api";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const { topic_name } = useParams();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    if (!topic_name) {
      fetchAllArticles(currentParams.sort_by, currentParams.order).then(
        (fetchedArticles) => {
          setAllArticles(fetchedArticles.articles);
        }
      );
    } else
      fetchArticlesByTopic(topic_name).then((topic) => {
        setAllArticles(topic.articles);
      });

    setSearchParams({
      sort_by: currentParams.sort_by,
      order: currentParams.order,
    });
  }, [topic_name, searchParams]);

  return (
    <>
      <section>
        <span>Sort bar: </span>
        <br />
        <button
          className="article_card--button"
          onClick={() => {
            setSearchParams({ sort_by: "created_at", order: order });
            setSortBy("created_at");
          }}
        >
          Date
        </button>
        <button
          className="article_card--button"
          onClick={() => {
            setSearchParams({ sort_by: "comment_count", order: order });
            setSortBy("comment_count");
          }}
        >
          Comment Count
        </button>
        <button
          className="article_card--button"
          onClick={() => {
            setSearchParams({ sort_by: "votes", order: order });
            setSortBy("votes");
          }}
          value="votes"
        >
          Votes
        </button>
        <button
          className="article_card--button"
          onClick={() => {
            if (order === "DESC") {
              setSearchParams({ sort_by: sortBy, order: "ASC" });
              setOrder("ASC");
            } else if (order === "ASC") {
              setSearchParams({ sort_by: sortBy, order: "DESC" });
              setOrder("DESC");
            }
          }}
        >
          Ascending / Descending
        </button>
      </section>

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
