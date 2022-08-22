export const fetchAllArticles = () => {
  return fetch("https://nc-news-leanne.herokuapp.com/api/articles").then(
    (res) => {
      return res.json();
    }
  );
};
