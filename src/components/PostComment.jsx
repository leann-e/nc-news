import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";
import { UserContext } from "../context/user";

const PostComment = () => {
  const [newBody, setNewBody] = useState("");
  const { currentUser } = useContext(UserContext);
  const { article_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, currentUser.username, newBody);
  };

  const button = document.getElementById("btn");
  if (button) {
    button.addEventListener("click", function handleClick() {
      button.textContent = "Comment Posted!";
    });
  }

  return (
    <>
      <section className="comment_card--post">
        <form method="post" onSubmit={handleSubmit}>
          <h3>Your Comment:</h3>
          <input
            onChange={(event) => {
              setNewBody(event.target.value);
            }}
            type="text"
            id="commentBody"
            name="commentBody"
            minLength="2"
            maxLength="5000"
            required
          />
          <br />
          <br />
          <button id="btn" className="comment_card--button">
            Post Comment
          </button>
        </form>
      </section>
    </>
  );
};

export default PostComment;
