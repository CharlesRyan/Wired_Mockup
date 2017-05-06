import React from "react";
import ArticlePreview from "./ArticlePreview";
import Article from "./Article";


const ArticleList = ({ listArticles, onArticleClick }) => (
    <div className="ArticleList">
            {Object.keys(listArticles).map(articleId =>
            <ArticlePreview 
            key={articleId} 
            onClick={onArticleClick}
            {...listArticles[articleId]} />
         )}
    </div>
    
);


export default ArticleList;


