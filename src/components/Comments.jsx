import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllComments, deleteComment } from "../api";
import { UserContext } from "../context/user";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    fetchAllComments(article_id).then((articleComments) => {
      setComments(articleComments.comments);
    });
  }, [article_id]);

  const removeComment = (comment_id) => {
    deleteComment(comment_id, currentUser.username).then(() => {
      setComments((currentComments) => {
        const filteredComments = [...currentComments];
        return filteredComments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
      });
    });
  };

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
                  <button
                    id="deleteButton"
                    hidden={
                      currentUser.username !== comment.author ? true : false
                    }
                    onClick={() => {
                      removeComment(comment.comment_id);
                    }}
                    className="comment_card--button"
                  >
                    Delete Comment
                  </button>
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
