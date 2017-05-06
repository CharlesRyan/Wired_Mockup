import axios from "axios";
import data from "../Articles.json";

export const fetchArticle = articleId => {
    articleId -= 1;
    return data.articles[articleId];
};

export const fetchArticleList = () => {
    return data.articles;
};
