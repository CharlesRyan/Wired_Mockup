import express from 'express';
import data from "../Articles.json";

const router = express.Router();

const articles = data.articles.reduce((obj, article) => {
  obj[article.id] = article;
  return obj;
}, {});


router.get('/articles', (req, res) => {
  res.send({
      articles: articles
  });
});

router.get('/articles/:articleId', (req, res) => {
    let article = articles[req.params.articleId];

    res.send(article);
});

export default router;
