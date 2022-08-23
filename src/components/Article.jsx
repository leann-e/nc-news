import { useState, useEffect } from "react";
import { fetchArticleById } from "../api";
import { useParams } from "react-router-dom";

const Article = () => {
  const [articleInfo, setArticleInfo] = useState({});
  const { article_id } = useParams();

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
            {articleInfo.article.votes}{" "}
          </p>
          <button>View Comments</button>{" "}
        </section>
      ) : null}
    </>
  );
};

export default Article;
