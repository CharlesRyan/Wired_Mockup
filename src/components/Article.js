import React, { Component } from "react";

class Article extends Component {
    render() {
        return (
            <div className={this.props.aAppearance}>
                <div className="articleContent">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.author}</p>
                </div>
                <div className="imgBox">
                    <img src={this.props.bigPicPath} className="headerPic" />
                </div>
                <div className="articleWords">
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Article;
