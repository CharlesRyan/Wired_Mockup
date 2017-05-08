import React from "react";
import ReactDOM from "react-dom";
import ArticleList from "./ArticleList";
import ThumbnailList from "./ThumbnailList";
import Article from "./Article";
import data from "../../Articles.json";
import * as api from "../api";

var listArticles, popArticles;


const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

const onPopState = handler => {
    window.onpopstate = handler;
};


class App extends React.Component {
    state = {
      articles: data,
      currentCategory: this.props.activeCat,
      currentArticleId: this.props.currentArticleId
    };
    componentDidMount() {
        onPopState((event) => {
              this.setState({
                  currentArticleId: (event.state || {}).currentArticleId
              });
        });
    }
    componentWillUnmount() {
        onPopState(null);
    }



    randNum = () => {
      return Math.round(Math.random() * 6);
    };
    pickFive = (sourceObj) => {
        var indexes = [];
        for (let i = 0; i < 6; i++) {
          var num = this.randNum();
          while(indexes.includes(num)) {
            num = this.randNum();
          };
          indexes.push(num);
        };
        var popObj = {};
         for (var i = 0; i < 6; i++) {
             popObj[i] = sourceObj[indexes[i]];
           };
        return popObj;
    };

    fetchArticle = (articleId) => {
        pushState(
            { currentArticleId: articleId }
        );
        let article = api.fetchArticle(articleId);
        this.setState({
                currentArticleId: article.id,
                articles: {
                    ...this.state.articles, //this.state.articles
                    [article.id]: article
                }
            });
    };

    fetchArticleList = () => {
        pushState(
            { currentArticleId: null }
        );
        api.fetchArticleList().then(articles => {
        this.setState({
                currentArticleId: null,
                articles
            });
        });
    };

    categorize = (category, articles) => {
        return articles.filter(key => (key.category.toLowerCase() === category));
    };

    currentArticle() {
        if (this.state.currentArticleId) { // or window.href.match article/#
          popArticles = this.pickFive(popArticles);
            return (
              <div className="App">
                <Article articleListClick={this.fetchArticleList} {...this.state.articles[this.state.currentArticleId]} />
                <ThumbnailList popArticles={popArticles}
                    onArticleClick={this.fetchArticle}/>
              </div>
            );

        } else if (this.props.activeCat) {
          var categorized = this.categorize(this.props.activeCat, listArticles);
          popArticles = this.pickFive(popArticles);
          return (
            <div className="App">
              <ArticleList listArticles={categorized}
              onArticleClick={this.fetchArticle}
              />
              <ThumbnailList popArticles={popArticles}
                  onArticleClick={this.fetchArticle}/>
            </div>
          );
        } else {
          popArticles = this.pickFive(popArticles);
            return (
              <div className="App">
                <ArticleList listArticles={listArticles}
                onArticleClick={this.fetchArticle}
                />
                <ThumbnailList popArticles={popArticles}
                    onArticleClick={this.fetchArticle}/>
              </div>
              );

        }


    }



    render() {
        
        if (this.state.articles) {
              listArticles = this.state.articles.articles; //this.state.articles
              popArticles = this.state.articles.articles;  //this.state.popArticles
            } else {
              listArticles = data.articles;
              popArticles = data.articles;
            }
        return (
          this.currentArticle()
        );
    }
}

export default App;