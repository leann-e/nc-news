import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllComments } from "../api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchAllComments(article_id).then((articleComments) => {
      setComments(articleComments.comments);
    });
  }, [article_id]);

  return (
    <>
      {Object.keys(comments).length ? (
        <section>
          <h1 className="comment_card--title">Comments:</h1>
          <ul className="comment_card--list">
            {comments.map((comment) => {
              return (
                <li className="comment_card--single" key={comment.comment_id}>
                  <p className="comment_card--title2">{comment.author}: </p>
                  <p className="comment_card--body">{comment.body}</p>
                  <p>
                    Votes: {comment.votes} | Date: {comment.created_at}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </>
  );
};

export default Comments;
