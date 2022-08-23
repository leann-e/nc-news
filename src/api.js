export const fetchAllArticles = () => {
  return fetch("https://nc-news-leanne.herokuapp.com/api/articles").then(
    (res) => {
      return res.json();
    }
  );
};

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
