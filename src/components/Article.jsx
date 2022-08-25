import { useState, useEffect } from "react";
import { fetchArticleById } from "../api";
import { useParams } from "react-router-dom";
import { incrementVotes, reduceVotes } from "../api";
import Comments from "./Comments";

const Article = () => {
  const [articleInfo, setArticleInfo] = useState({});
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((content) => {
      setArticleInfo(content);
    });
  }, [article_id]);

  const hideComments = () => {
    const comments = document.getElementById("articleComments");
    if (comments.hidden) {
      comments.style.display = "none";
      comments.hidden = false;
    } else {
      comments.style.display = "block";
      comments.hidden = true;
    }
  };

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
          <button className="article_card--button" onClick={hideComments}>
            View Comments
          </button>{" "}
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
      <section hidden id="articleComments">
        <Comments />
      </section>
    </>
  );
};

export default Article;
