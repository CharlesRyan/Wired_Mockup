import React from "react";
import ArticleTN from "./ArticleTN";


const ThumbnailList = ({ popArticles, onArticleClick }) => (
  <div id="mostPopular">
    <h2><span></span>Most Popular</h2>
    <div className="ThumbnailList">
            {Object.keys(popArticles).map(articleId =>
              <ArticleTN
              key={articleId}
              onClick={onArticleClick}
              {...popArticles[articleId]} />
         )}
    </div>
  </div>


);


export default ThumbnailList;
