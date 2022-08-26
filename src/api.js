import axios from "axios";

// export const fetchAllArticles = () => {
//   return fetch("https://nc-news-leanne.herokuapp.com/api/articles").then(
//     (res) => {
//       return res.json();
//     }
//   );
// };

export const fetchAllTopics = () => {
  return fetch("https://nc-news-leanne.herokuapp.com/api/topics").then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchArticlesByTopic = (topic_name) => {
  return fetch(
    `https://nc-news-leanne.herokuapp.com/api/articles?topic=${topic_name}`
  ).then((res) => {
    return res.json();
  });
};

export const fetchArticleById = (article_id) => {
  return fetch(
    `https://nc-news-leanne.herokuapp.com/api/articles/${article_id}`
  ).then((res) => {
    return res.json();
  });
};

export const incrementVotes = (article) => {
  return axios.patch(
    `https://nc-news-leanne.herokuapp.com/api/articles/${article}`,
    { inc_votes: 1 }
  );
};

export const reduceVotes = (article) => {
  return axios.patch(
    `https://nc-news-leanne.herokuapp.com/api/articles/${article}`,
    { inc_votes: -1 }
  );
};

export const fetchAllComments = (article_id) => {
  return fetch(
    `https://nc-news-leanne.herokuapp.com/api/articles/${article_id}/comments`
  ).then((res) => {
    return res.json();
  });
};

export const postComment = (article_id, author, body) => {
  return axios
    .post(
      `https://nc-news-leanne.herokuapp.com/api/articles/${article_id}/comments`,
      {
        username: author,
        body: body,
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const fetchAllUsers = () => {
  return fetch("https://nc-news-leanne.herokuapp.com/api/users").then((res) => {
    return res.json();
  });
};

export const fetchAllArticles = (sort_by = "created_at", order = "DESC") => {
  return axios
    .get(`https://nc-news-leanne.herokuapp.com/api/articles`, {
      params: { sort_by, order },
    })
    .then((res) => {
      return res.data;
    });
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://nc-news-leanne.herokuapp.com/api/comments/${comment_id}`
  );
};
