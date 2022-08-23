import { useState, useEffect } from "react";
import { fetchArticleById } from "../api";
import { useParams } from "react-router-dom";
import { incrementVotes, reduceVotes } from "../api";

const Article = () => {
  const [articleInfo, setArticleInfo] = useState({});
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const { article_id } = useParams();
  console.log(article_id);
  useEffect(() => {
    fetchArticleById(article_id).then((content) => {
      setArticleInfo(content);
    });
  }, [article_id]);

  return (
    <>
      {Object.keys(articleInfo).length ? (
        <section className="article_card--single">
          {" "}
          <h1 className="article_card--title2">
            {articleInfo.article.title}
          </h1>{" "}
          <p>
            Author: {articleInfo.article.author} | Topic:{" "}
            {articleInfo.article.topic}{" "}
          </p>{" "}
          <div className="article_card--body">
            <p>{articleInfo.article.body}</p>{" "}
          </div>{" "}
          <p>
            Comments: {articleInfo.article.comment_count} | Votes:{" "}
            {articleInfo.article.votes + optimisticVotes}{" "}
          </p>
          <button className="article_card--button">View Comments</button>{" "}
          <button
            className="article_card--button"
            disabled={optimisticVotes ? true : false}
            onClick={() => {
              incrementVotes(article_id).catch(() => {
                setOptimisticVotes((currentOptimisticVotes) => {
                  return currentOptimisticVotes - 1;
                });
              });
              setOptimisticVotes((currentOptimisticVotes) => {
                return currentOptimisticVotes + 1;
              });
            }}
          >
            Upvote
          </button>
          <button
            className="article_card--button"
            disabled={optimisticVotes ? true : false}
            onClick={() => {
              reduceVotes(article_id).catch(() => {
                setOptimisticVotes((currentOptimisticVotes) => {
                  return currentOptimisticVotes + 1;
                });
              });
              setOptimisticVotes((currentOptimisticVotes) => {
                return currentOptimisticVotes - 1;
              });
            }}
          >
            Downvote
          </button>
        </section>
      ) : null}
    </>
  );
};

export default Article;
