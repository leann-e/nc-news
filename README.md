# NC-News (Frontend)

## Summary

This is the solo frontend project for the Northcoders Bootcamp, which is built using React.

It is written in JavaScript, with minimal styling done using CSS.

## About the Project

The overall aim of this project was to create an interface that utilises the GET, POST, PATCH and DELETE API calls written in the backend section of this course, which can be found [here.](https://github.com/leann-e/be-nc-news-proj)

It allows users to view a list of all the articles, which can then be sorted by the listed options such as votes or ascending order. There is also a seperarte navigation to allow users to only see articles from a specific topic.

Users can also click into the individual articles and view it, along with the ability to show/hide the comments, and post their own comment. Users can only delete their own comments.

Users can also upvote or downvote an article.

## Hosted

The hosted version of this project is available [here.](https://nc-news-lw.netlify.app/?sort_by=undefined&order=undefined)

## Cloning the Repo

1. Fork and clone this repo.
2. Run `npm install` to install all the required dependencies.
3. Run `npm start` to get the project running. This will open a new tab/browser.

## Deployment

1. Run `npm run build`.
2. Run `netlify deploy`.
3. Check the draft URL provided to see if any changes need to be made, then run `netlify deploy --prod`.

## Tech Stack

This project was built using React, and uses `react-router-dom` to handle the routing. It also makes use of axios for http requests.

## Versions

This project was completed using Node.js v18.3.0.
